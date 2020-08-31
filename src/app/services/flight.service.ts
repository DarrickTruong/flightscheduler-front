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

  // get single flight
  getFlight(id:number): Observable<any> {
    return this.http.get(this.endpoint + id)
  }
 
  getAllFlights(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  // Post - Add a flight
  flightCreate(flight:Flight): Observable<object> {
    return this.http.post(this.endpoint, flight)
  }

  // Put - Edit Flight
  editFlight(id:number, payload: any): Observable<object>{
    return this.http.put(this.endpoint + id, payload)
  }

  // Delete Flight
  deleteFlight(id:number):Observable<any> {
    return this.http.delete(this.endpoint + id)
  }

  deleteAllFlights(): Observable<any> {
    return this.http.delete(this.endpoint)
  }

}
