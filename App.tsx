import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {AppNavigator} from './src/navigation/AppNavigator';
import {useAppDispatch} from './src/store/hooks';
import {loadOrdersFromStorage, syncPendingOrders} from './src/store/thunks';
import {useNetworkStatus} from './src/hooks/useNetworkStatus';

function AppContent() {
  const dispatch = useAppDispatch();
  const isConnected = useNetworkStatus();

  useEffect(() => {
    // Load orders from storage on app start
    dispatch(loadOrdersFromStorage());
  }, [dispatch]);

  useEffect(() => {
    // Auto-sync when network is restored
    if (isConnected) {
      dispatch(syncPendingOrders());
    }
  }, [isConnected, dispatch]);

  return <AppNavigator />;
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
