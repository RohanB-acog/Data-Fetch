// app/exercise6/page.tsx
import { ServerSection } from './components/sections/ServerSection';
import { ClientSection } from './components/sections/ClientSection';
import { initRegistry } from './lib/registry/initRegistry';

// Initialize registry
initRegistry();

export default function Exercise6Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Exercise 6: Unified API Endpoint
      </h1>
      
      <div className="grid gap-8">
        <ServerSection />
        <ClientSection />
      </div>
    </div>
  );
}