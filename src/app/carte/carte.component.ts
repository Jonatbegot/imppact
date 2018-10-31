import { AddadresseComponent } from '../addadresse/addadresse.component';
import { Component, OnInit, Output } from '@angular/core';
import { House } from '../common/house';
import { Bonbons } from '../common/bonbons';

declare var ol: any;
@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  distance = 60;
  points: Array<{ x: number; y: number; rue: string }> = [];
  lat: any;
  lon: any;
  content: any;
  address: House;

  ngOnInit() {
    this.findMe();
    this.points.push(
      { x: 0.6886, y: 47.3867, rue: 'Origé' },
      { x: 0.6835425788775638, y: 47.389162890744416, rue: 'Béranger' },
      { x: 0.6675780708209231, y: 47.38880261587773, rue: 'Tonnellé' },
      { x: 0.6972754890338138, y: 47.38752420068718, rue: 'Tonnellé' },
      { x: 0.6858600074664309, y: 47.38065509386844, rue: 'Royer' },
      { x: 0.6940997535601809, y: 47.37773748677403, rue: 'Grammont' },
      { x: 0.6813475478395503, y: 47.38442026145208, rue: 'Boisdenier' },
      { x: 0.7023394996539309, y: 47.384409387356996, rue: 'Quinet' },
      { x: 0.6931461878909886, y: 47.384584433430994, rue: 'Parmentier' },
      { x: 0.6769272673830073, y: 47.38369964408929, rue: 'Giraudeau' });
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
      rue: 'MAME'
    });
  }

  showHouse(rue, x, y) {
    this.address = new House(rue, x, y, [new Bonbons('', '')]);
  }
}
