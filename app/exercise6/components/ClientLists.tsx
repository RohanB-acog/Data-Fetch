// app/exercise6/components/ClientLists.tsx
'use client';
import dynamic from 'next/dynamic';

const ClientUserList = dynamic(
  () => import('./UserList/client').then(mod => mod.ClientUserList),
  { ssr: false }
);

const ClientProductList = dynamic(
  () => import('./ProductList/client').then(mod => mod.ClientProductList),
  { ssr: false }
);

const ClientAdminList = dynamic(
  () => import('./AdminList/client').then(mod => mod.ClientAdminList),
  { ssr: false }
);

export function ClientLists() {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Client-side Fetching</h2>
      <div className="space-y-6">
        <ClientUserList />
        <ClientProductList />
        <ClientAdminList />
      </div>
    </div>
  );
}