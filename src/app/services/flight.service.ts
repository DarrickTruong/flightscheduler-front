import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Flight } from "../models/flights";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private endpoint = 'http://localhost:8000/flights/'
  constructor(private http:HttpClient) { }

  getAllFlights(): Observable<any> {
    return this.http.get(this.endpoint);
  }



}
