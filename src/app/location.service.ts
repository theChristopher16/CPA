import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(){
    //return this.http.get('http://127.0.0.1:8080/achievements') //Sends GET request to PHP server
    //return this.http.get('http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/locations') //Sends GET request to cloud webserver
    return this.http.get('http://winnet.duckdns.org:8080/userInfo')
}
}
