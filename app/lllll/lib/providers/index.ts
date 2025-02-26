// app/exercise6/lib/providers/index.ts
import { User, Product } from '../../types';

export const userDataProvider = async (): Promise<User[]> => {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data.users;
};

export const productDataProvider = async (): Promise<Product[]> => {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.products;
};
