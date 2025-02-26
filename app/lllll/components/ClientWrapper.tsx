// app/exercise6/components/ClientWrapper.tsx
'use client';
import { BaseEntity } from '../types';
import { ListRenderer } from './renderers/ListRenderer';
import { useDataFetching } from '../hooks/useDataFetching';

interface ClientWrapperProps<T extends BaseEntity> {
  component: string;
  title: string;
  renderItem: (item: T) => React.ReactNode;
}

export function ClientWrapper<T extends BaseEntity>({
  component,
  title,
  renderItem
}: ClientWrapperProps<T>) {
  const { data, loading, error } = useDataFetching<T>(component);

  return (
    <ListRenderer<T>
      title={title}
      data={data || []}
      loading={loading}
      error={error}
      renderItem={renderItem}
    />
  );
}
