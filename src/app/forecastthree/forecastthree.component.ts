import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Prediction } from '../prediction';
import { Chart } from 'chart.js';
import { PredictionthreeService } from '../predictionthree.service';

@Component({
  selector: 'app-forecastthree',
  templateUrl: './forecastthree.component.html',
  styleUrls: ['./forecastthree.component.css']
})
export class ForecastthreeComponent implements OnInit {

  @ViewChild('chart')
  public refChart: ElementRef;

  public chartone: any;
  public preddata: Prediction[];
  public realdata: any[];

  constructor(private predservice: PredictionthreeService) { }

  ngOnInit() {
    this.insertchart();
  }

  ngAfterViewinit(){
    // this.insertchart();
  }

  insertchart(): void {
    let pred = [];
    let expec = [];
    let date = [];
    let alljson = [];
    this.predservice.getPredictionData().subscribe(data => {
      this.preddata = data;

// tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.preddata.length; index++) {
        pred.push(this.preddata[index].prediction);
        expec.push(this.preddata[index].expectation);
        date.push(this.preddata[index].date);
        let a = parseFloat(this.preddata[index].prediction);
        let b = parseFloat(this.preddata[index].expectation);
        let diff = a - b;
        let status: string;
        if (diff >= 0)
        {
          if (diff <= 50){
            if ( diff <= 30){
            status = 'Nearly';
            } else {
            status = 'Close';
            }
          }
          else {
            status = 'Far';
          }
        } else {
          if (diff >= -50){
            if ( diff >= -30){
            status = 'Nearly';
            } else {
            status = 'Close';
            }
          }
          else {
            status = 'Far';
          }
        }
        alljson.push({date: this.preddata[index].date,
          prediction: this.preddata[index].prediction,
          expectation: this.preddata[index].expectation,
          status: status
        })
      }
      this.realdata = alljson;

      var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
      };

      let chart = this.refChart.nativeElement;
      let ctx = chart.getContext('2d');
      let myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            {
              label: 'Prediction',
      				borderColor: chartColors.red,
			      	backgroundColor: chartColors.red,
              data: pred,
              fill: false
            },
            {
              label: 'Expectation',
      				borderColor: chartColors.blue,
			      	backgroundColor: chartColors.blue,
              data: expec,
              fill: false
            }
          ]
        },
        options: {
          title: {
						display: true,
						text: 'Prediction Week 3 (datatrain: week 2)'
					},
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
                ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });
    });
  }

}
