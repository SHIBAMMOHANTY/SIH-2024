// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimeSheet() {
  return (
    <View style={styles.container}>
      <Text>Time ssssssheet  screen</Text>
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
