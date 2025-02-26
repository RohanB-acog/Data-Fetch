'use client';
import { Admin, WithFetchingProps } from '../../types';
import { createClientComponent } from '../../lib/hoc/createClientComponent';
import { ClientAdminListRenderer } from './ClientRenderer';

export const ClientAdminList = createClientComponent<Admin>(ClientAdminListRenderer, 'admin');
