// app/exercise6/components/lists/ClientDataList.tsx
'use client';
import { BaseEntity } from '../../types';
import { useDataFetching } from '../../hooks/useDataFetching';
import { ClientListRenderer } from './ClientListRenderer';

interface ClientDataListProps<T extends BaseEntity> {
  component: string;
  title: string;
}

export function ClientDataList<T extends BaseEntity>({
  component,
  title
}: ClientDataListProps<T>) {
  const { data, loading, error } = useDataFetching<T>(component);

  if (loading) {
    return <div>Loading {title.toLowerCase()}...</div>;
  }

  return (
    <ClientListRenderer<T>
      title={title}
      data={data || []}
      component={component}
      error={error}
    />
  );
}