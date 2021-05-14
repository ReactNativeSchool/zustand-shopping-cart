import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../constants/colors';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { useCart } from '../util/cart';
import { price } from '../util/format';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  summaryContainer: {
    backgroundColor: colors.white,
    padding: 20,
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  checkoutContainer: { marginTop: 10 },
});

const Summary = () => {
  const { cart, removeItem } = useCart(state => ({
    cart: state.cart,
    removeItem: state.removeItem,
  }));

  const items = Object.keys(cart);

  let total = 0;
  items.forEach(id => {
    total += cart[id].price * cart[id].quantity;
  });

  return (
    <>
      {items.map(id => (
        <TouchableOpacity
          key={id}
          onPress={() => removeItem({ id, all: true })}
        >
          <View style={styles.rowItem}>
            <Text>• {cart[id].name}</Text>
            <Text>{`$${price(cart[id].price)} x${cart[id].quantity}`}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text type="header" style={{ marginTop: 15 }}>{`Total: $${price(
        total,
      )}`}</Text>
    </>
  );
};

export const Cart = () => {
  const { isEmpty } = useCart(state => ({
    isEmpty: Object.keys(state.cart).length === 0,
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.summaryContainer}>
        {isEmpty ? <Text>Cart is empty...</Text> : <Summary />}
      </View>
      {!isEmpty && (
        <View style={styles.checkoutContainer}>
          <Button>Checkout</Button>
        </View>
      )}
    </ScrollView>
  );
};
