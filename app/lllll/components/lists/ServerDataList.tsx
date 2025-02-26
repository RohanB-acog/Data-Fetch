// app/exercise6/components/lists/ServerDataList.tsx
import { BaseEntity } from '../../types';
import { DataRegistry } from '../../lib/registry/DataRegistry';
import { ClientListRenderer } from './ClientListRenderer';

interface ServerDataListProps<T extends BaseEntity> {
  component: string;
  title: string;
}

export async function ServerDataList<T extends BaseEntity>({
  component,
  title
}: ServerDataListProps<T>) {
  const registry = DataRegistry.getInstance();
  
  try {
    const data = await registry.getData(component) as T[];
    return <ClientListRenderer title={title} data={data} component={component} />;
  } catch (error) {
    return (
      <ClientListRenderer 
        title={title}
        data={[]}
        component={component}
        error={error instanceof Error ? error.message : 'An error occurred'}
      />
    );
  }
}