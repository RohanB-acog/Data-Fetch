// app/exercise6/page.tsx
import { Suspense } from 'react';
import { ServerUserList } from './components/UserList/server';
import { ServerProductList } from './components/ProductList/server';
import { ServerAdminList } from './components/AdminList/server';
import { ClientLists } from './components/ClientLists';

export default function Exercise6Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Exercise 6: Unified API Endpoint
      </h1>

      <div className="grid gap-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Server-side Fetching</h2>
          <div className="space-y-6">
            <Suspense fallback={<div>Loading users...</div>}>
              <ServerUserList />
            </Suspense>
            <Suspense fallback={<div>Loading products...</div>}>
              <ServerProductList />
            </Suspense>
            <Suspense fallback={<div>Loading admins...</div>}>
              <ServerAdminList />
            </Suspense>
          </div>
        </div>

        <ClientLists />
      </div>
    </div>
  );
}