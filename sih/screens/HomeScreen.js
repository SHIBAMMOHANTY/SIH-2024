// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Where's my team</Text>
      <Text style={styles.subHeading}>Enable GPS reminder for managers, and receive alerts once your team member leaves a work location during working hours.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: '90%',
    alignSelf: 'center', // Centers the container horizontally
    borderWidth: 1,
    borderColor: '#dadada',
    padding: 16,
    borderRadius: 8,
  },
  headingText: {
    fontSize: 24,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 18,
    fontFamily: 'Arial',
    marginTop: 16,
    color: '#333',
  },
  button: {
    marginTop: 16,
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: 'white',
    textAlign: 'center',
  },
});
