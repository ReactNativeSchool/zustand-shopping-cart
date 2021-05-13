import React from 'react';
import { View } from 'react-native';

import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { useCounter } from '../util/counter';

const Instance = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{count}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <Button onPress={decrement} type="outline">
          Decrement
        </Button>
        <Button onPress={increment}>Increment</Button>
      </View>
    </View>
  );
};

export const Counter = () => {
  return (
    <View style={{ flex: 1 }}>
      <Instance />
      <Instance />
    </View>
  );
};
