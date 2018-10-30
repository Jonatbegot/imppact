import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdressesService {



  constructor(private service: HttpClient) {

  }

  readAll(lat: number , lon: number): Observable<any> {

    // tslint:disable-next-line:max-line-length
    return this.service.get<any>(`http://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`);
  }

  readById(id: string): Observable<any> {

    return this.service.get<any>(`http://nominatim.openstreetmap.org/reverse/format/lat/lon/zoom/${id}`);
  }
}
