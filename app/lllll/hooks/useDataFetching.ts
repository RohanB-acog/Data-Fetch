// app/exercise6/hooks/useDataFetching.ts
'use client';
import { useState, useEffect } from 'react';
import { BaseEntity } from '../types';

interface UseDataFetchingResult<T> {
  data: T[] | null;
  loading: boolean;
  error: string | null;
}

export function useDataFetching<T extends BaseEntity>(
  component: string
): UseDataFetchingResult<T> {
  const [state, setState] = useState<UseDataFetchingResult<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data?component=${component}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Failed to fetch data');
        }

        if (mounted) {
          setState({
            data: result.data,
            loading: false,
            error: null,
          });
        }
      } catch (error) {
        if (mounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error.message : 'An error occurred',
          });
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [component]);

  return state;
}
