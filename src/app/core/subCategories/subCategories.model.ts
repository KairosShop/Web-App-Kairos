import { Product } from '@core/products/products.model';

export interface SubCategory{
  id: number;
  id_category?: number;
  title: string;
  urlImage: string;
  products: Product[];
}