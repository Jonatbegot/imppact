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

  ngOnInit() {
    this.findMe();
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
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

}
