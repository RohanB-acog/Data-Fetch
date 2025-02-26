// app/exercise6/lib/registry/DataRegistry.ts
export class DataRegistry {
  private static instance: DataRegistry;
  private dataProviders: Map<string, () => Promise<unknown[]>>;

  private constructor() {
    this.dataProviders = new Map();
  }

  static getInstance(): DataRegistry {
    if (!DataRegistry.instance) {
      DataRegistry.instance = new DataRegistry();
    }
    return DataRegistry.instance;
  }

  register(key: string, provider: () => Promise<unknown[]>) {
    if (this.dataProviders.has(key)) {
      console.warn(`Provider already registered for key: ${key}`);
      return;
    }
    this.dataProviders.set(key, provider);
    console.log(`Registered provider for: ${key}`);
  }

  async getData(key: string): Promise<unknown[]> {
    const provider = this.dataProviders.get(key);
    if (!provider) {
      console.error('Available providers:', Array.from(this.dataProviders.keys()));
      throw new Error(`No data provider registered for key: ${key}`);
    }
    try {
      return await provider();
    } catch (error) {
      console.error(`Error fetching data for ${key}:`, error);
      throw error;
    }
  }

  hasProvider(key: string): boolean {
    return this.dataProviders.has(key);
  }

  getRegisteredProviders(): string[] {
    return Array.from(this.dataProviders.keys());
  }
}