import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
private apiUrl = 'https://01.fy25ey01.64mb.io/';
  getData():Observable<any> {
return this.http.get<any>(this.apiUrl);
  }
}