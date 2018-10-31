import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdressesService {



  constructor(private service: HttpClient) {

  }

  readAll(num: number , type: string , nom: string , codep: number): Observable<any> {


    // tslint:disable-next-line:max-line-length
    return this.service.get<any>(`https://nominatim.openstreetmap.org/search/fr/${num}%20${type}%20${nom}%20${codep}?format=jsonv2&adressdetails=1&limit=15`);

  }

  readById(id: string): Observable<any> {

    return this.service.get<any>(`http://nominatim.openstreetmap.org/reverse/format/lat/lon/zoom/${id}`);
  }
}
