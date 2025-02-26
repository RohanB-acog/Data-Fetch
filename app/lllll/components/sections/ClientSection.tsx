// app/exercise6/components/sections/ClientSection.tsx
'use client';
import { User, Product } from '../../types';
import { ClientDataList } from '../lists/ClientDataList';

export function ClientSection() {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Client-side Fetching</h2>
      <div className="space-y-6">
        <ClientDataList<User>
          component="users"
          title="Users"
        />
        <ClientDataList<Product>
          component="products"
          title="Products"
        />
      </div>
    </div>
  );
}
