import { Component, OnInit } from '@angular/core';

declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  distance = 60;
  points: Array<{ x: number; y: number; }> = [];
  lat: any;
  lon: any;
  // constructor(private component: AddadresseComponent) {

  // }
  ngOnInit() {
    // this.lat = this.component.coordolat;
    // this.lon = this.component.coordolon;
  }
}
