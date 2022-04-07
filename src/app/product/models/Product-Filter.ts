import { Category, SubCategory } from '../enums/Category';

export class ProductFilter {
  categories: Category[];
  minPrice: number;
  maxPrice: number;

  constructor(categories: Category[], minPrice: number, maxPrice: number) {
    this.categories = categories;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }
}
