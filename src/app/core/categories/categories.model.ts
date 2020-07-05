import { SubCategory } from '@core/subCategories/subCategories.model'

export interface Category {
  id: number;
  category: string;
  url_image: string;
  subCategories?: SubCategory[];
}
