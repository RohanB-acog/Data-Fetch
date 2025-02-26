// app/exercise6/components/AdminList/ClientRenderer.tsx
'use client';
import { Admin, WithFetchingProps } from '../../types';
import { ListRenderer } from '../renderers/ListRenderer';
import { AdminItemRenderer } from '../renderers/ItemRenderers';

export function ClientAdminListRenderer(props: WithFetchingProps<Admin>) {
  return (
    <ListRenderer<Admin>
      {...props}
      title="Admins"
      renderItem={AdminItemRenderer}
    />
  );
}
