import { Nutrients } from './nutrients';
import { Product } from './openfood';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpenfoodService {

  products: Product[];

  constructor(private service: HttpClient) {}

  readAll(): Observable<any> {

    return this.service.get<any>('https://sll-api.openfoodfacts.org/category/candies.json');
  }

  readById(id: string): Observable<any> {

    return this.service.get<any>(`https://sll-api.openfoodfacts.org/category/candies/${id}`);
  }
}
