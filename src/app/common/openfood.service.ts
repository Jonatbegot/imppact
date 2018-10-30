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

  constructor(private service: HttpClient) {

    // if (!localStorage.products) {

    //   this.products = this.service.get('/openfood/').map(x => {

    //     const product = new Product();


    //     product.id = x.id;
    //     product.productName = x.product_name;
    //     product.brand = x.brand;
    //     product.quantity = x.quantity;
    //     product.packaging = x.packaging;
    //     product.categorie = x.categories;
    //     product.labels = x.labels;
    //     product.country = x.country;
    //     product.ingredients = x.ingredients;
    //     product.allergenes = x.allergenes;
    //     product.nova = x.nova;
    //     product.nutriscore = x.nutriscore;
    //     product.keywords = x.keywords;

    //     const nutr = new NutritionalValue();


    //     nutr.energy = x.nutritional_value.energy;
    //     nutr.lipides = x.nutritional_value.lipides;
    //     nutr.saturatedFat = x.nutritional_value.saturated_fat;
    //     nutr.glucides = x.nutritional_value.glucides;
    //     nutr.sugar = x.nutritional_value.sugar;
    //     nutr.fibresAlimentaires = x.nutritional_value.fibres_alimentaires;
    //     nutr.proteines = x.nutritional_value.proteines;
    //     nutr.salt = x.nutritional_value.salt;
    //     nutr.sodium = x.nutritional_value.sodium;

    //     product.nutritional_value = nutr;
    //     product.image = x.image;
    //     return product;
    //   });

    //   this.saveToLocalStorage(this.products);

    // } else {

    //   this.products = JSON.parse(localStorage.products);

    // }  // if (!localStorage.products) {

    //   this.products = this.service.get('/openfood/').map(x => {

    //     const product = new Product();


    //     product.id = x.id;
    //     product.productName = x.product_name;
    //     product.brand = x.brand;
    //     product.quantity = x.quantity;
    //     product.packaging = x.packaging;
    //     product.categorie = x.categories;
    //     product.labels = x.labels;
    //     product.country = x.country;
    //     product.ingredients = x.ingredients;
    //     product.allergenes = x.allergenes;
    //     product.nova = x.nova;
    //     product.nutriscore = x.nutriscore;
    //     product.keywords = x.keywords;

    //     const nutr = new NutritionalValue();


    //     nutr.energy = x.nutritional_value.energy;
    //     nutr.lipides = x.nutritional_value.lipides;
    //     nutr.saturatedFat = x.nutritional_value.saturated_fat;
    //     nutr.glucides = x.nutritional_value.glucides;
    //     nutr.sugar = x.nutritional_value.sugar;
    //     nutr.fibresAlimentaires = x.nutritional_value.fibres_alimentaires;
    //     nutr.proteines = x.nutritional_value.proteines;  // if (!localStorage.products) {

    //   this.products = this.service.get('/openfood/').map(x => {

    //     const product = new Product();


    //     product.id = x.id;
    //     product.productName = x.product_name;
    //     product.brand = x.brand;
    //     product.quantity = x.quantity;
    //     product.packaging = x.packaging;
    //     product.categorie = x.categories;
    //     product.labels = x.labels;  // if (!localStorage.products) {

    //   this.products = this.service.get('/openfood/').map(x => {

    //     const product = new Product();


    //     product.id = x.id;
    //     product.productName = x.product_name;
    //     product.brand = x.brand;
    //     product.quantity = x.quantity;
    //     product.packaging = x.packaging;
    //     product.categorie = x.categories;
    //     product.labels = x.labels;
    //     product.country = x.country;
    //     product.ingredients = x.ingredients;
    //     product.allergenes = x.allergenes;
    //     product.nova = x.nova;
    //     product.nutriscore = x.nutriscore;
    //     product.keywords = x.keywords;

    //     const nutr = new NutritionalValue();


    //     nutr.energy = x.nutritional_value.energy;
    //     nutr.lipides = x.nutritional_value.lipides;
    //     nutr.saturatedFat = x.nutritional_value.saturated_fat;
    //     nutr.glucides = x.nutritional_value.glucides;
    //     nutr.sugar = x.nutritional_value.sugar;
    //     nutr.fibresAlimentaires = x.nutritional_value.fibres_alimentaires;
    //     nutr.proteines = x.nutritional_value.proteines;
    //     nutr.salt = x.nutritional_value.salt;
    //     nutr.sodium = x.nutritional_value.sodium;

    //     product.nutritional_value = nutr;
    //     product.image = x.image;
    //     return product;
    //   });

    //   this.saveToLocalStorage(this.products);

    // } else {

    //   this.products = JSON.parse(localStorage.products);

    // }
    //     product.country = x.country;
    //     product.ingredients = x.ingredients;
    //     product.allergenes = x.allergenes;
    //     product.nova = x.nova;
    //     product.nutriscore = x.nutriscore;
    //     product.keywords = x.keywords;

    //     const nutr = new NutritionalValue();


    //     nutr.energy = x.nutritional_value.energy;
    //     nutr.lipides = x.nutritional_value.lipides;
    //     nutr.saturatedFat = x.nutritional_value.saturated_fat;
    //     nutr.glucides = x.nutritional_value.glucides;
    //     nutr.sugar = x.nutritional_value.sugar;  // if (!localStorage.products) {

    //   this.products = this.service.get('/openfood/').map(x => {

    //     const product = new Product();


    //     product.id = x.id;
    //     product.productName = x.product_name;
    //     product.brand = x.brand;
    //     product.quantity = x.quantity;
    //     product.packaging = x.packaging;
    //     product.categorie = x.categories;
    //     product.labels = x.labels;
    //     product.country = x.country;
    //     product.ingredients = x.ingredients;
    //     product.allergenes = x.allergenes;
    //     product.nova = x.nova;
    //     product.nutriscore = x.nutriscore;
    //     product.keywords = x.keywords;

    //     const nutr = new NutritionalValue();


    //     nutr.energy = x.nutritional_value.energy;
    //     nutr.lipides = x.nutritional_value.lipides;
    //     nutr.saturatedFat = x.nutritional_value.saturated_fat;
    //     nutr.glucides = x.nutritional_value.glucides;
    //     nutr.sugar = x.nutritional_value.sugar;
    //     nutr.fibresAlimentaires = x.nutritional_value.fibres_alimentaires;
    //     nutr.proteines = x.nutritional_value.proteines;
    //     nutr.salt = x.nutritional_value.salt;  // if (!localStorage.products) {

    //   this.products = this.service.get('/openfood/').map(x => {

    //     const product = new Product();


    //     product.id = x.id;
    //     product.productName = x.product_name;
    //     product.brand = x.brand;
    //     product.quantity = x.quantity;
    //     product.packaging = x.packaging;
    //     product.categorie = x.categories;
    //     product.labels = x.labels;
    //     product.country = x.country;
    //     product.ingredients = x.ingredients;
    //     product.allergenes = x.allergenes;
    //     product.nova = x.nova;
    //     product.nutriscore = x.nutriscore;
    //     product.keywords = x.keywords;

    //     const nutr = new NutritionalValue();


    //     nutr.energy = x.nutritional_value.energy;
    //     nutr.lipides = x.nutritional_value.lipides;
    //     nutr.saturatedFat = x.nutritional_value.saturated_fat;
    //     nutr.glucides = x.nutritional_value.glucides;
    //     nutr.sugar = x.nutritional_value.sugar;
    //     nutr.fibresAlimentaires = x.nutritional_value.fibres_alimentaires;
    //     nutr.proteines = x.nutritional_value.proteines;
    //     nutr.salt = x.nutritional_value.salt;
    //     nutr.sodium = x.nutritional_value.sodium;

    //     product.nutritional_value = nutr;
    //     product.image = x.image;
    //     return product;
    //   });

    //   this.saveToLocalStorage(this.products);

    // } else {

    //   this.products = JSON.parse(localStorage.products);

    // }
    //     nutr.sodium = x.nutritional_value.sodium;

    //     product.nutritional_value = nutr;
    //     product.image = x.image;
    //     return product;
    //   });

    //   this.saveToLocalStorage(this.products);

    // } else {

    //   this.products = JSON.parse(localStorage.products);

    // }
    //     nutr.fibresAlimentaires = x.nutritional_value.fibres_alimentaires;
    //     nutr.proteines = x.nutritional_value.proteines;
    //     nutr.salt = x.nutritional_value.salt;
    //     nutr.sodium = x.nutritional_value.sodium;

    //     product.nutritional_value = nutr;
    //     product.image = x.image;
    //     return product;
    //   });

    //   this.saveToLocalStorage(this.products);

    // } else {

    //   this.products = JSON.parse(localStorage.products);

    // }
    //     nutr.salt = x.nutritional_value.salt;
    //     nutr.sodium = x.nutritional_value.sodium;

    //     product.nutritional_value = nutr;
    //     product.image = x.image;
    //     return product;
    //   });

    //   this.saveToLocalStorage(this.products);

    // } else {

    //   this.products = JSON.parse(localStorage.products);

    // }
  }

  readAll(): Observable<any> {

    return this.service.get<any>('https://sll-api.openfoodfacts.org/category/candies.json');
  }

  readById(id: string): Observable<any> {

    return this.service.get<any>(`https://sll-api.openfoodfacts.org/category/candies/${id}`);
  }


  getProductsNames() {
    let list = [];
    for (let i = 0; i < this.products.length; i++) {
      list.push(this.products[i].productName);
    }
    return list;

  }
}


