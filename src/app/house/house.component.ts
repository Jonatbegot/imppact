import { Component, OnInit } from '@angular/core';
import { OpenfoodService } from '../common/openfood.service';
import { HousesService } from '../common/houses.service';
import { House } from '../common/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  products: any;
  productName: string;
  houses: House[];

  constructor(private productService: OpenfoodService, private houseService: HousesService) { }

  ngOnInit() {
    this.productService.readAll().subscribe(res => {
      this.products = res.products;
    });

    this.houses = this.houseService.get();
  }

  addCandy(houseName): void {
    const candy = this.products.find(product => product.product_name === this.productName);
    const idCandy = candy.id;
    this.houseService.add(houseName, idCandy, this.productName);
  }

  findCandyAllergen(candyName) {
    const candy = this.products.find(product => product.product_name === candyName);
    console.log(candy.id);
    return candy.allergens_from_ingredients ? candy.allergens_from_ingredients : '(aucun spécifié)' ;
  }

  findCandyEnergy(candyName) {
    const candy = this.products.find(product => product.product_name === candyName);
    return candy.nutriments.energy;
  }

  findCandyPic(candyName) {
    const candy = this.products.find(product => product.product_name === candyName);
    return candy.image_url;
  }

  addToBag() {
  }
}
