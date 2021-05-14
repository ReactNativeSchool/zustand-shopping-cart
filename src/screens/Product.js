import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';
import { Button } from '../components/Button';

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

  return (
    <View style={styles.container}>
      <Text type="header">{item.name}</Text>
      <Text type="subheader">
        {`$${Math.round(item.price * 0.01 * 100) / 100}`}
      </Text>

      <View style={styles.quantity}>
        <Button type="outline">-</Button>
        <Text style={styles.quantityText}>0</Text>
        <Button type="outline">+</Button>
      </View>
    </View>
  );
};
