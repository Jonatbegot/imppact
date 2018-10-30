import { Bonbons } from './bonbons';

export class House {
  constructor(public name: string,
  public x: number,
  public y: number,
  public bonbons: Bonbons[]) {}
}
