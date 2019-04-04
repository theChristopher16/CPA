import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RaspberryPiInfoService {

  constructor(private http: HttpClient) { }

  getRaspberryPiNetwork(){
    return this.http.get('http://127.0.0.1:8080/networkStatus')
  }
}
