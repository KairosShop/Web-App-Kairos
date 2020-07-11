import { Measure } from '../measure/measure.model'

export interface Product {
  "id"?: number;
  "active": boolean;
  "delete"?: boolean;
  "title": string;
  "description": string;
  "urlImage": string;
  "measureId": number,
  "measure"?: Measure;
  "categoryId": number;
  "subcategoryId": number;
  "quantity": number;
  "count"?: number;
  "price"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
};
