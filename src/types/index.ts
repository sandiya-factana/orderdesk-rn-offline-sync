export enum SyncStatus {
  PENDING = 'PENDING',
  SYNCED = 'SYNCED',
  FAILED = 'FAILED',
}

export interface Order {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
  syncStatus: SyncStatus;
  updatedAt?: string;
}

export interface CreateOrderPayload {
  title: string;
  amount: number;
}

export interface UpdateOrderPayload {
  id: string;
  title: string;
  amount: number;
}
