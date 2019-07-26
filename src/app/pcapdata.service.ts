import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pcapdata } from './pcapdata';



@Injectable({
  providedIn: 'root'
})
export class PcapdataService {

  private apiUrl = 'http://localhost:8100/filtering';

  constructor(private http: HttpClient) {}

  getRawdata(): Observable<Pcapdata[]> {
    return this.http.get<Pcapdata[]>(this.apiUrl);
  }
}
