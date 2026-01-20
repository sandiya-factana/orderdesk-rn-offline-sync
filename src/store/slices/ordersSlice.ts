import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Order, SyncStatus, CreateOrderPayload, UpdateOrderPayload} from '../../types';
import {AppThunk} from '../thunks';
import {storageService} from '../../services/storage';
import {syncService} from '../../services/sync';

interface OrdersState {
  items: Order[];
  isLoading: boolean;
  isSyncing: boolean;
  lastSyncTime: string | null;
}

const initialState: OrdersState = {
  items: [],
  isLoading: false,
  isSyncing: false,
  lastSyncTime: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSyncing: (state, action: PayloadAction<boolean>) => {
      state.isSyncing = action.payload;
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.items = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.items.push(action.payload);
    },
    updateOrder: (state, action: PayloadAction<Order>) => {
      const index = state.items.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setLastSyncTime: (state, action: PayloadAction<string>) => {
      state.lastSyncTime = action.payload;
    },
  },
});

export const {setLoading, setSyncing, setOrders, addOrder, updateOrder, setLastSyncTime} =
  ordersSlice.actions;

export default ordersSlice.reducer;
