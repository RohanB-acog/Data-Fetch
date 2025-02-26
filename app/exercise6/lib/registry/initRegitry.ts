// app/exercise6/lib/registry/initRegitry.ts
import { FetcherRegistry } from './FetcherRegistery';
import { UserDataFetcher } from '../data-fetchers/UserDataFetcher';
import { ProductDataFetcher } from '../data-fetchers/ProductDataFetcher';
import { AdminDataFetcher } from '../data-fetchers/AdminDataFetcher';

let initialized = false;

export function initRegistry() {
  if (initialized) return;
  
  console.log('Initializing registry...');

  const registry = FetcherRegistry.getInstance();
  
  // Register all fetchers
  console.log('Registering users fetcher...');
  registry.register('users', UserDataFetcher);
  
  console.log('Registering products fetcher...');
  registry.register('products', ProductDataFetcher);
  
  console.log('Registering admin fetcher...');
  registry.register('admin', AdminDataFetcher);

  // Log all registered fetchers
  console.log('Registered fetchers:', Array.from(registry['fetchers'].keys()));

  initialized = true;
  console.log('Registry initialized.');
}