import { Component, OnInit } from '@angular/core';
import { PcapdataService } from '../pcapdata.service';
import { Pcapdata } from '../pcapdata';


@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.css']
})
export class RawdataComponent implements OnInit {

  public pcapdatalist: Pcapdata[];
  constructor(
    private pcapdataservice: PcapdataService) { }

  ngOnInit() {
    this.getPcapdata();
  }

  getPcapdata(): void {
    this.pcapdataservice.getRawdata()
    .subscribe(pcapdatalist => this.pcapdatalist = pcapdatalist);
  }






}
