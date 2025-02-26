// app/exercise5/components/renderers/ItemRenderers.tsx
'use client';
import { User, Product, Admin } from '../../types';

// Add this function

export function AdminItemRenderer(user: Admin) {
  return (
    <span>{user.name} - {user.email}</span>
  );
}
export function UserItemRenderer(user: User) {
  return (
    <span>{user.name} - {user.email}</span>
  );
}

export function ProductItemRenderer(product: Product) {
  return (
    <span>{product.name} - ${product.price}</span>
  );
}