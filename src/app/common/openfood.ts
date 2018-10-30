import { Nutrients } from './nutrients';
export class Product {
  id: string | number;
  name: string;
  categories: string[];
  ingredients: string;
  allergens: string[];
  nutrients: Nutrients;
  images: string;
  productName: any;
}
