// app/exercise6/lib/data-fetchers/AdminDataFetcher.tsx
import { Admin } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

export class AdminDataFetcher extends BaseDataFetcher<Admin> {
  constructor() {
    super('admin');
  }

  protected transformData(data: unknown): Admin[] {
    if (!data || typeof data !== 'object' || !('admin' in data)) {
      throw new Error('Invalid data format');
    }
    return (data as { admin: Admin[] }).admin;
  }
}