// app/exercise6/components/sections/ServerSection.tsx
import { Suspense } from 'react';
import { User, Product } from '../../types';
import { ServerDataList } from '../lists/ServerDataList';

export function ServerSection() {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Server-side Fetching</h2>
      <div className="space-y-6">
        <Suspense fallback={<div>Loading users...</div>}>
          <ServerDataList<User>
            component="users"
            title="Users"
          />
        </Suspense>
        <Suspense fallback={<div>Loading products...</div>}>
          <ServerDataList<Product>
            component="products"
            title="Products"
          />
        </Suspense>
      </div>
    </div>
  );
}
