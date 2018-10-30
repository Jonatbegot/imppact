import { Component, OnInit } from '@angular/core';

import { OpenfoodService } from '../common/openfood.service';



@Component({
  selector: 'app-filtre',
  templateUrl: 'filtre.component.html',
})

export class FiltreComponent implements OnInit {

  products: any[];
  productName: string;

  constructor(private productService: OpenfoodService) { }

  ngOnInit() {
    this.productService.readAll().subscribe(res => {
      this.products = res.products;
    });
  }
//   houseVerif() {
//   for (let i = 0 ; i < houses.lenght ; i++) {
//       if (productName) {
//         house.check = true;
//       }

//   }
// }
}
