// app/exercise6/components/renderers/ListRenderer.tsx
'use client';
import { ListRendererProps, BaseEntity } from '../../types';

export function ListRenderer<T extends BaseEntity>({
  title,
  data,
  loading = false,
  error = null,
  renderItem
}: ListRendererProps<T>) {
  if (loading) {
    return (
      <div className="p-4 bg-gray-50 rounded">
        Loading {title.toLowerCase()}...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded">
        <p className="text-red-700">Error: {error}</p>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="p-4 bg-gray-50 rounded">
        No {title.toLowerCase()} found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="space-y-2">
        {data.map(item => (
          <li 
            key={item.id}
            className="p-3 bg-white rounded shadow-sm"
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}