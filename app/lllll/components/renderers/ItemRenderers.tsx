// app/exercise6/components/renderers/ItemRenderers.tsx
'use client';
import { User, Product } from '../../types';

export function UserItemRenderer(user: User) {
  return (
    <div className="flex justify-between">
      <span className="font-medium">{user.name}</span>
      <span className="text-gray-500">{user.email}</span>
    </div>
  );
}

export function ProductItemRenderer(product: Product) {
  return (
    <div className="flex justify-between">
      <span className="font-medium">{product.name}</span>
      <span className="text-green-600">${product.price}</span>
    </div>
  );
}