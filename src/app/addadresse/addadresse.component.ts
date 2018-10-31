import { AdressesService } from './../common/adresses.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addadresse',
  templateUrl: './addadresse.component.html',
  styleUrls: ['./addadresse.component.css']
})
export class AddadresseComponent implements OnInit {
  num: number;
  type: string;
  nom: string;
  codep: number;
  coordolat: any;
  coordolon: any;

  @Output()
  event: EventEmitter<any> = new EventEmitter();

  constructor(private service: AdressesService) { }

  ngOnInit() {
  }
  /**
   * recup lon et lat dans l'api,
   * puis envoie données vers la carte
   */
  envoie() {
    this.coordolat = this.service.readAll(this.num , this.type , this.nom , this.codep).subscribe(res => {
      return res[0].lat ;
    });
    this.coordolon = this.service.readAll(this.num, this.type, this.nom, this.codep).subscribe(res => {
      return res[0].lon;
    });
    console.log('lat: ' + this.coordolat);
    console.log('lon: ' + this.coordolon);
    this.sendEvent(this.coordolon, this.coordolat);
  }

  sendEvent(coordolat, coordolon) {
    const coor = [this.coordolat, this.coordolon];
    console.log('coord : ' + coor);
    this.event.emit(coor);
  }
}
