import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  getUserInfo(){
    return this.http.get('http://winnet.duckdns.org:8080/userInfo') //Sends GET request to PHP server
    //return this.http.get('http://ec2-34-219-116-164.us-west-2.compute.amazonaws.com/userInfo') //Sends GET request to cloud webserver
  }
}
