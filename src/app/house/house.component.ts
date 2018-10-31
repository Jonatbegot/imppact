import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OpenfoodService } from '../common/openfood.service';
import { HousesService } from '../common/houses.service';
import { House } from '../common/house';
import { BagService } from '../common/bag.service';
import { Bag } from '../common/bag';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit, OnChanges {
  products: any;
  productName: string;
  houses: House[];
  house: House;
  alreadyAdded: boolean;
  bag: Bag[];

  spell: boolean;

  @Input() address: House;

  constructor(private productService: OpenfoodService, private houseService: HousesService, private bagService: BagService) { }

  ngOnInit() {
    this.productService.readAll().subscribe(res => {
      this.products = res.products;
    });

    this.houses = this.houseService.get();

    this.bag = this.bagService.get();

    this.house = this.houses[0];
    this.spell = false;
  }

  ngOnChanges() {

    this.houses = this.houseService.get();

    this.bag = this.bagService.get();

    this.house = this.houses[0];

    if (this.address) {
      for (const house of this.houses) {
        if (this.address.name === house.name) {
          this.house = this.address;
        } else {
          this.houseService.addHouse(this.address);
          this.house = this.address;
        }
      }
    }
  }

  /**
   *
   * @param houseName
   * add candy selected in the search field
   */
  addCandy(houseName): void {
    const candy = this.products.find(product => product.product_name === this.productName);
    const idCandy = candy.id;
    this.houseService.add(houseName, idCandy, this.productName);
    this.productName = '';
  }

  /**
   *
   * @param houseName
   * @param candyName
   * Remove Candy from the house
   */
  removeCandyFromHouse(houseName, candyName): void {
    this.houseService.delete(houseName, candyName);
  }


  /**
   *
   * @param candyName
   * Find and return candy infos
   */
  findCandyAllergen(candyName) {
    const candy = this.products.find(product => product.product_name === candyName);
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

  /**
   *
   * @param candyName
   * Add the candy to the bag that will be displayed in the bonbondex
   */
  addToBag(candyName): void {
    const candy = this.products.find(product => product.product_name === candyName);
    const name = candy.product_name;
    const image = candy.image_url;
    const allergen = candy.allergens_from_ingredients ? candy.allergens_from_ingredients : '(aucun spécifié)';
    const energy = candy.nutriments.energy;
    this.bagService.add(name, image, allergen, energy);
  }

  checkExistant(candyName) {
    for (const bagItem of this.bag) {
      if (bagItem.name === candyName) {
        this.alreadyAdded = true;
        return true;
      }
    }
    this.alreadyAdded = false;
    return false;
  }


  castSpell() {
    this.spell = true;
  }
}

