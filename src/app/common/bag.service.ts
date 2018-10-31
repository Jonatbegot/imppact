import { Injectable } from '@angular/core';
import { Bag } from './bag';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  bag: Bag[] = [];

  constructor() {
    if (localStorage.Bag) {
      const data = JSON.parse(localStorage.Bag);
      this.bag = data;
    } else {
      this.saveToLocalStorage(this.bag);
    }
  }

  saveToLocalStorage(bag) {
    const data = JSON.stringify(bag);
    localStorage.setItem('Bag', data);
  }

  get(): Bag[] {
    return this.bag;
  }

  add(name: string, image: string, allergen: string, energy: number) {
    const article = new Bag(image, name, energy, allergen);
    this.bag.push(article);
    this.saveToLocalStorage(this.bag);
  }

}
