import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdressesService {



  constructor(private service: HttpClient) {

  }

  readAll(): Observable<any> {

    return this.service.get<any>('http://nominatim.openstreetmap.org/reverse.json');
  }

  readById(id: string): Observable<any> {

    return this.service.get<any>(`http://nominatim.openstreetmap.org/reverse${id}`);
  }
}
