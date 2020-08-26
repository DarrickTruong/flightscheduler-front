import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from "@angular/forms";
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightCreateComponent } from './flight-create/flight-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FlightCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
