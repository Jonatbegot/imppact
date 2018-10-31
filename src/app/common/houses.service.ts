import { Injectable } from '@angular/core';
import { OpenfoodService } from './openfood.service';
import { House } from './house';
import { Bonbons } from './bonbons';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  houses: House[] = [];
  house: House;
  constructor(private service: OpenfoodService) {
    if (!localStorage.Houses) {
      const bonbon1 = new Bonbons('3103220043158', 'Chamallows Choco');
      const bonbon2 = new Bonbons('23167308', 'Haloween Party');
      this.house = new House('MAME', 0.6686190000000352, 47.393041, [bonbon1, bonbon2]);
      this.houses.push(this.house);
      this.saveToLocalStorage(this.houses);

    } else {
      const data = JSON.parse(localStorage.Houses);
      this.houses = data;
    }
  }

  saveToLocalStorage(houses) {
    const data = JSON.stringify(houses);
    localStorage.setItem('Houses', data);
  }

  get(): House[] {
    return this.houses;
  }

  /**
   *
   * @param houseName
   * @param candyID
   * @param candyName
   * add a candy to designated house
   */
  add(houseName: string, candyID: string, candyName: string) {
    const houseToUpdate = this.houses.find(house => house.name === houseName);
    const index = this.houses.indexOf(houseToUpdate);
    this.houses[index].bonbons.push(new Bonbons(candyID, candyName));
    this.saveToLocalStorage(this.houses);
  }
  /**
   *
   * @param house
   * remove a candy from designated house
   */
  delete(house: string, candy: string) {
    const indexHouse = this.houses.findIndex(x => x.name === house);
    const indexCandy = this.houses[indexHouse].bonbons.findIndex(x => x.name === candy);
    this.houses[indexHouse].bonbons.splice(indexCandy, 1);
    this.saveToLocalStorage(this.houses);
  }
}
