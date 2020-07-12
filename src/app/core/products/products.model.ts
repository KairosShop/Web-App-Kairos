import { Measure } from '../measure/measure.model'

export interface Product {
  id?: number;
  active: boolean;
  delete?: boolean;
  title: string;
  name: string;
  description: string;
  urlImage: string;
  measureId: number,
  measure?: Measure;
  categoryId: number;
  subcategoryId: number;
  quantity: number;
  count?: number;
  price?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface ProductsTable {
  status: boolean;
  id: number;
  title?: string;
  name?: string;
  quantity: string;
  measure: string;
  category?: string;
  subcategory?: string;
  deleted: boolean;
}

export interface ProductComparation {
  id?: number;
  title: string;
  urlImage: string;
  quantity?: string;
  measure?: string;
  price?: number;
  supermarkers: [];
};