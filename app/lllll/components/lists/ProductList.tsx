// app/exercise6/components/lists/ProductList.tsx
'use client';
import { Product } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { useDataFetching } from '../../hooks/useDataFetching';

export function ProductList() {
  const { data, loading, error } = useDataFetching<Product>('products');

  return (
    <ListRenderer<Product>
      title="Products"
      data={data || []}
      loading={loading}
      error={error}
      renderItem={(product) => (
        <div className="flex justify-between">
          <span className="font-medium">{product.name}</span>
          <span className="text-green-600">${product.price}</span>
        </div>
      )}
    />
  );
}
