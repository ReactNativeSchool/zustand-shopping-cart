import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

const items = [
  {
    id: 1,
    name: 'Bulleit Bourbon',
    price: 2999,
  },
  {
    id: 2,
    name: 'Woodford Reserve',
    price: 3599,
  },
  {
    id: 3,
    name: "Maker's Mark",
    price: 2999,
  },
  {
    id: 4,
    name: 'Knob Creek',
    price: 3399,
  },
];

export const Products = ({ navigation }) => (
  <FlatList
    style={styles.container}
    data={items}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <ListItem
        title={item.name}
        onPress={() => navigation.push('Product', { item })}
      />
    )}
    ItemSeparatorComponent={ListSeparator}
    ListHeaderComponent={ListSeparator}
    ListFooterComponent={ListSeparator}
  />
);
