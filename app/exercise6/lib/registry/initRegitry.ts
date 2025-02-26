// app/exercise5/lib/registry/initRegistry.ts
import { FetcherRegistry } from './FetcherRegistery';
import { UserDataFetcher } from '../data-fetchers/UserDataFetcher';
import { ProductDataFetcher } from '../data-fetchers/ProductDataFetcher';
import { AdminDataFetcher} from '../data-fetchers/AdminDataFetcher';

let initialized = false;

export function initRegistry() {
  if (initialized) return;

  const registry = FetcherRegistry.getInstance();
  // Register all fetchers
  registry.register('users', UserDataFetcher);
  registry.register('products', ProductDataFetcher);
  registry.register('admin', AdminDataFetcher);

  // Remove this incorrect static call
  // FetcherRegistry.register('fruits', FruitDataFetcher);

  initialized = true;
}