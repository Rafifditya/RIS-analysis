import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prediction } from './prediction';

@Injectable({
  providedIn: 'root'
})
export class PredictionthreeService {

  private apiUrl = 'http://localhost:8100/getPredictionthree';

  constructor(private http: HttpClient) {}

  getPredictionData(): Observable<Prediction[]> {
    return this.http.get<Prediction[]>(this.apiUrl);
  }
}
