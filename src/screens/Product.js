import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';
import { Button } from '../components/Button';
import { useCart } from '../util/cart';
import { price } from '../util/format';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 15,
  },
});

export const Product = ({ route = {} }) => {
  const item = route?.params?.item || {};
  const { quantity, addItem, removeItem } = useCart(state => ({
    addItem: state.addItem,
    removeItem: state.removeItem,
    quantity: state.cart[item.id]?.quantity || 0,
  }));

  return (
    <View style={styles.container}>
      <Text type="header">{item.name}</Text>
      <Text type="subheader">{`$${price(item.price)}`}</Text>

      <View style={styles.quantity}>
        <Button type="outline" onPress={() => removeItem({ id: item.id })}>
          -
        </Button>
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button
          type="outline"
          onPress={() =>
            addItem({ id: item.id, name: item.name, price: item.price })
          }
        >
          +
        </Button>
      </View>
    </View>
  );
};
