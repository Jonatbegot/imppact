import { AddadresseComponent } from '../addadresse/addadresse.component';
import { Component, OnInit, OnChanges } from '@angular/core';

declare var ol: any;
@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit, OnChanges {
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

  ngOnChanges() {
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

  receiveCoord($event) {
    console.log($event);
    this.points.push({
      x: $event[1],
      y: $event[0],
    });
    console.log("points : " + this.points);
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
