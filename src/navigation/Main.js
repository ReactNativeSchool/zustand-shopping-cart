import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Products } from '../screens/Products';
import { Product } from '../screens/Product';
import { Cart } from '../screens/Cart';

const ProductStack = createStackNavigator();
const ProductStackNavigator = () => (
  <ProductStack.Navigator>
    <ProductStack.Screen name="Products" component={Products} />
    <ProductStack.Screen
      name="Product"
      component={Product}
      options={({ route }) => ({
        title: route?.params?.item?.name,
      })}
    />
  </ProductStack.Navigator>
);

const CheckoutStack = createStackNavigator();
const CheckoutStackNavigator = () => (
  <CheckoutStack.Navigator>
    <CheckoutStack.Screen name="Cart" component={Cart} />
  </CheckoutStack.Navigator>
);

const Tabs = createBottomTabNavigator();

export const Main = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Products" component={ProductStackNavigator} />
    <Tabs.Screen name="Checkout" component={CheckoutStackNavigator} />
  </Tabs.Navigator>
);
