// screens/HomeScreen.js
import React, { useState } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, Image  } from 'react-native';

export default function TimeClock() {
  const [location, setLocation] = useState('Location not detected');

  return (
    <View style={styles.container}>
      {/* Location Status */}
      <View style={styles.locationBox}>
        <Text style={styles.locationText}>📍 {location}</Text>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your own working image URL
          style={styles.image}
        />
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clockInButton}>
          <Text style={styles.clockInText}>▶ Clock in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addHoursButton}>
          <Text style={styles.addHoursText}>+ Add hours</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  locationBox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  locationText: {
    fontSize: 16,
    color: '#999',
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockInButton: {
    backgroundColor: '#28a745',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  clockInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addHoursButton: {
    borderWidth: 1,
    borderColor: '#ff7f50',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  addHoursText: {
    color: '#ff7f50',
    fontSize: 16,
    fontWeight: 'bold',
  },
});