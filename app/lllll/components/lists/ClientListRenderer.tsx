// app/exercise6/components/lists/ClientListRenderer.tsx
'use client';
import { BaseEntity } from '../../types';
import { User, Product } from '../../types';
import { UserItemRenderer, ProductItemRenderer } from '../renderers/ItemRenderers';
import { ListRenderer } from '../renderers/ListRenderer';

interface ClientListRendererProps<T extends BaseEntity> {
  title: string;
  data: T[];
  component: string;
  error?: string | null;
}

export function ClientListRenderer<T extends BaseEntity>({
  title,
  data,
  component,
  error = null
}: ClientListRendererProps<T>) {
  const renderItem = (item: T) => {
    switch (component) {
      case 'users':
        return <UserItemRenderer {...(item as unknown as User)} />;
      case 'products':
        return <ProductItemRenderer {...(item as unknown as Product)} />;
      default:
        return <div>Unknown component type</div>;
    }
  };

  return (
    <ListRenderer<T>
      title={title}
      data={data}
      loading={false}
      error={error}
      renderItem={renderItem}
    />
  );
}