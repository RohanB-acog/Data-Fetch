// app/exercise5/components/UserList/client.tsx
'use client';
import { Admin, User, WithFetchingProps } from '../../types';
import { createClientComponent } from '../../lib/hoc/createClientComponent';
import { ClientAdminListRenderer } from './ClientRenderer';

export const ClientAdminList = createClientComponent<Admin>(ClientAdminListRenderer, 'admin');