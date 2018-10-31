import { AddadresseComponent } from './addadresse/addadresse.component';
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
    this.findMe();
    // this.lat = this.component.coordolat;
    // this.lon = this.component.coordolon;
  }



  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showPosition(position) {
    this.points.push({
      x: position.coords.longitude,
      y: position.coords.latitude,
    });
  }
  //   addMarker($event) {
  //     console.log($event.coordinate);
  //     const map = $event.map;

  //     map.forEachFeatureAtPixel($event.pixel, (feature, layer) => {
  //       console.log (feature.getGeometry());

  //     });
  //     console.log($event)
  //   }
}
