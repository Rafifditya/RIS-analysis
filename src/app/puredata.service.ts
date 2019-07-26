import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puredata } from './puredata';



@Injectable({
  providedIn: 'root'
})
export class PuredataService {

  private apiUrl = 'http://localhost:8100/filtering';

  constructor(private http: HttpClient) {}

  getListdata(): Observable<Puredata[]> {
    return this.http.get<Puredata[]>(this.apiUrl);
  }
}
