export interface Product {
  "id": number;
  "title": string;
  "quantity": number;
  "id_measure": number,
  "description": string;
  "id_category": number;
  "id_subcategory": number;
  "url_image": string;
  "active": number;
  "cound"?: number;
  "price"?: number;
}