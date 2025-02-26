// app/exercise6/components/lists/UserList.tsx
'use client';
import { User } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { useDataFetching } from '../../hooks/useDataFetching';

export function UserList() {
  const { data, loading, error } = useDataFetching<User>('users');
  
  return (
    <ListRenderer<User>
      title="Users"
      data={data || []}
      loading={loading}
      error={error}
      renderItem={(user) => (
        <div className="flex justify-between">
          <span className="font-medium">{user.name}</span>
          <span className="text-gray-500">{user.email}</span>
        </div>
      )}
    />
  );
}

