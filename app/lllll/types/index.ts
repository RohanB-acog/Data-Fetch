// app/exercise6/types/index.ts
export interface BaseEntity {
  id: number;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
}

export interface Product extends BaseEntity {
  name: string;
  price: number;
}

export interface ApiResponse<T> {
  data: T[];
  error?: string;
  metadata?: {
    component: string;
    timestamp: number;
    cache?: boolean;
  };
}

// Add this interface for ListRenderer
export interface ListRendererProps<T extends BaseEntity> {
  title: string;
  data: T[];
  loading?: boolean;
  error?: string | null;
  renderItem: (item: T) => React.ReactNode;
}