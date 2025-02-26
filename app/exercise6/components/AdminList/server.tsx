// app/exercise6/components/AdminList/server.tsx
import { Admin, WithFetchingProps } from '../../types';
import { createServerComponent } from '../../lib/hoc/createServerComponent';
import { ClientAdminListRenderer } from './ClientRenderer';

function AdminListComponent(props: WithFetchingProps<Admin>) {
  return <ClientAdminListRenderer {...props} />;
}

export const ServerAdminList = createServerComponent<Admin>(AdminListComponent, 'admin');