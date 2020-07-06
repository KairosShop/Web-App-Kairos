import { SubCategory } from '@core/subCategories/subCategories.model'
import { Product } from '@core/products/products.model';

export interface Category {
  id: number;
  category: string;
  url_image?: string;
  subCategories?: SubCategory[];
  products?: Product[];
}
