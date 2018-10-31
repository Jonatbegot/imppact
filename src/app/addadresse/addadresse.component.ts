import { AdressesService } from './../common/adresses.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoordinateComponent } from 'ngx-openlayers';
import { coordinate } from 'openlayers';

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
coordinate

  constructor(private service: AdressesService) { }

  ngOnInit() {
  }
envoie () {
  this.service.readAll(this.num , this.type , this.nom , this.codep).subscribe(res => {
    this.coordolat = res[0].lat ;
    this.coordolon = res[0].lon ;
    console.log (res[0].lat );
    console.log (res[0].lon );
  });


}
}
