// app/exercise6/lib/registry/initRegistry.ts
import { DataRegistry } from './DataRegistry';

let initialized = false;

export function initRegistry() {
  if (initialized) return;

  const registry = DataRegistry.getInstance();

  registry.register('users', async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      return data.users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  });

  registry.register('products', async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  });

  initialized = true;
  console.log('Registry initialized with providers:', registry.getRegisteredProviders());
}
