import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private http: HttpClient) { }

  getScores(){
    //return this.http.get('http://127.0.0.1:8080/scores') //Sends GET request to PHP server
    return this.http.get('http://ec2-34-222-160-131.us-west-2.compute.amazonaws.com/scores') //Sends GET request to cloud webserver
  }
}