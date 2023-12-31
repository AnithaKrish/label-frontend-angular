import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Label } from './core/model/Label';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  private url = 'http://localhost:8080/';
  

  constructor(private http: HttpClient) {

    
   }
  getLabels(): Observable<any>{
  return this.http.get(this.url+"labels/all");
}
}
