// app/exercise5/components/UserList/ClientRenderer.tsx
'use client';
import { Admin, User, WithFetchingProps } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { AdminItemRenderer } from '../renderers/ItemRenderers';

export function ClientAdminListRenderer(props: WithFetchingProps<User>) {
  return (
    <ListRenderer<Admin>
      {...props}
      title="Users"
      renderItem={AdminItemRenderer}
    />
  );
}