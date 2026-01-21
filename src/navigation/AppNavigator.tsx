import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OrderListScreen} from '../screens/OrderListScreen';
import {CreateOrderScreen} from '../screens/CreateOrderScreen';
import {EditOrderScreen} from '../screens/EditOrderScreen';

export type RootStackParamList = {
  OrderList: undefined;
  CreateOrder: undefined;
  EditOrder: {orderId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OrderList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#333333',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}>
        <Stack.Screen
          name="OrderList"
          component={OrderListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateOrder"
          component={CreateOrderScreen}
          options={{title: 'Create Order'}}
        />
        <Stack.Screen
          name="EditOrder"
          component={EditOrderScreen}
          options={{title: 'Edit Order'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
