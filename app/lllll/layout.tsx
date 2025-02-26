// app/exercise6/layout.tsx
import { initRegistry } from './lib/registry/initRegistry';

// Initialize registry at the app root
initRegistry();

export default function Exercise6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}