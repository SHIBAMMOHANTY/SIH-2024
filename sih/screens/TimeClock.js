// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimeClock() {
  return (
    <View style={styles.container}>
      <Text>TimeClock Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
