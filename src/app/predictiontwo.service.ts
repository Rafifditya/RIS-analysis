import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prediction } from './prediction';

@Injectable({
  providedIn: 'root'
})
export class PredictiontwoService {

  private apiUrl = 'http://localhost:8100/getPredictiontwo';

  constructor(private http: HttpClient) {}

  getPredictionData(): Observable<Prediction[]> {
    return this.http.get<Prediction[]>(this.apiUrl);
  }
}
