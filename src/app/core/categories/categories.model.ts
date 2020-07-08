import { SubCategory } from '@core/subCategories/subCategories.model'
import { Product } from '@core/products/products.model';

export interface Category {
  id: number;
  title: string;
  urlImage?: string;
  subcategories?: SubCategory[];
  products?: Product[];
}
