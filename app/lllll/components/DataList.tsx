// app/exercise6/components/DataList.tsx
'use client';
import { User, Product } from '../types';
import { ClientWrapper } from './ClientWrapper';
import { UserItemRenderer, ProductItemRenderer } from './renderers/ItemRenderers';

export function UserDataList() {
  return (
    <ClientWrapper<User>
      component="users"
      title="Users"
      renderItem={UserItemRenderer}
    />
  );
}

export function ProductDataList() {
  return (
    <ClientWrapper<Product>
      component="products"
      title="Products"
      renderItem={ProductItemRenderer}
    />
  );
}
