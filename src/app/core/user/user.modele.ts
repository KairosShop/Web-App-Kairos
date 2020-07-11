export interface User {
  id?: number;
  active?: boolean;
  deleted?: boolean;
  urlImage?: string;
  email?: string;
  firstName?: string
  lastName?: string;
  rol?: string;
  verified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserTable {
  id?: number;
  active?: boolean;
  email?: string;
  firstName?: string
  lastName?: string;
  rol?: string;
  verified?: boolean;
}