import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Flight } from "../models/flights";
import { FlightService } from "../services/flight.service";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  success: boolean = false;
  flights:Observable<Flight[]>;

  constructor(private flightService:FlightService) { }

  ngOnInit() {
    this.loadflightsData()
  }

  loadflightsData() {
    this.flights = this.flightService.getAllFlights();
  }

  deleteFlight(id) {
    this.flightService.deleteFlight(id)
      .subscribe(
        data => {
          this.success = true;
          this.loadflightsData();
        }, error => console.log("Failed to delete" + error)
        
      )
  }

  deleteAllFlights() {
    this.flightService.deleteAllFlights()
      .subscribe(
        data => {
          this.success = true;
          this.loadflightsData();
        }, error => console.log("Failed to delete" + error)
      )
  }

    
}
