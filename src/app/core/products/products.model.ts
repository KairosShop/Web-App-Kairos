export interface Measure {
  "id": number,
  "active": boolean;
  "measure": string;
  "deleted": boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
};

export interface Product {
  "id": number;
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
  "cound"?: number;
  "price"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
};
