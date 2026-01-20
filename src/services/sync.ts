import {Order, SyncStatus} from '../types';

/**
 * Mock API service for syncing orders
 * In a real app, this would make actual HTTP requests
 */
export const syncService = {
  /**
   * Sync a single order to the server
   */
  async syncOrder(order: Order): Promise<Order> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate random failures (10% failure rate for testing)
    if (Math.random() < 0.1) {
      throw new Error('Network error: Failed to sync order');
    }

    // Return synced order with updated status
    return {
      ...order,
      syncStatus: SyncStatus.SYNCED,
      updatedAt: new Date().toISOString(),
    };
  },

  /**
   * Sync multiple orders in batch
   */
  async syncOrders(orders: Order[]): Promise<Order[]> {
    const results: Order[] = [];
    
    for (const order of orders) {
      try {
        const syncedOrder = await this.syncOrder(order);
        results.push(syncedOrder);
      } catch (error) {
        // Mark as failed if sync fails
        results.push({
          ...order,
          syncStatus: SyncStatus.FAILED,
        });
      }
    }

    return results;
  },
};
