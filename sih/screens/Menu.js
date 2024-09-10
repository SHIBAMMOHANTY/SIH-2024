// screens/HomeScreen.js
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
    {/* Organization Section */}
    <View style={styles.section}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>K</Text>
        </View>
        <Text style={styles.text}>Kingfisher</Text>
      </View>
      <TouchableOpacity style={styles.item}>
        <Icon name="briefcase-outline" size={24} color="#000" />
        <Text style={styles.text}>Time off</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="document-outline" size={24} color="#000" />
        <Text style={styles.text}>Reports</Text>
        <Text style={styles.premiumBadge}>PREMIUM</Text>
      </TouchableOpacity>
    </View>

    {/* Settings Section */}
    <Text style={styles.sectionHeader}>Settings</Text>
    <View style={styles.section}>
      <TouchableOpacity style={styles.item}>
        <Icon name="people-outline" size={24} color="#000" />
        <Text style={styles.text}>People</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="time-outline" size={24} color="#000" />
        <Text style={styles.text}>Time Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="git-branch-outline" size={24} color="#000" />
        <Text style={styles.text}>Organization</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="calendar-outline" size={24} color="#000" />
        <Text style={styles.text}>Work Schedules</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="location-outline" size={24} color="#000" />
        <Text style={styles.text}>Locations</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="pricetag-outline" size={24} color="#000" />
        <Text style={styles.text}>Activities</Text>
      </TouchableOpacity>
    </View>

    {/* Ultimate Section */}
    <View style={styles.section}>
      <TouchableOpacity style={styles.item}>
        <Icon name="folder-outline" size={24} color="#000" />
        <Text style={styles.text}>Projects</Text>
        <Text style={styles.ultimateBadge}>ULTIMATE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="people-outline" size={24} color="#000" />
        <Text style={styles.text}>Clients</Text>
        <Text style={styles.ultimateBadge}>ULTIMATE</Text>
      </TouchableOpacity>
    </View>

    {/* Account Section */}
    <Text style={styles.sectionHeader}>Account</Text>
    <View style={styles.section}>
      <TouchableOpacity style={styles.item}>
        <Icon name="settings-outline" size={24} color="#000" />
        <Text style={styles.text}>Personal Settings</Text>
      </TouchableOpacity>
    </View>

    {/* Help Section */}
    <Text style={styles.sectionHeader}>Help</Text>
    <View style={styles.section}>
      <TouchableOpacity style={styles.item}>
        <Icon name="help-circle-outline" size={24} color="#000" />
        <Text style={styles.text}>Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Icon name="tablet-portrait-outline" size={24} color="#000" />
        <Text style={styles.text}>Set up Kiosk</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f5f5f5',
},
section: {
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: '#fff',
  marginBottom: 10,
},
sectionHeader: {
  paddingHorizontal: 20,
  paddingVertical: 5,
  fontSize: 18,
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
},
iconBox: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#ff8c00',
  justifyContent: 'center',
  alignItems: 'center',
},
iconText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
item: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 15,
},
text: {
  fontSize: 16,
  marginLeft: 15,
  flex: 1,
},
premiumBadge: {
  backgroundColor: '#d3e0ff',
  color: '#007aff',
  paddingHorizontal: 5,
  borderRadius: 3,
  fontSize: 12,
},
ultimateBadge: {
  backgroundColor: '#f3e0ff',
  color: '#af52de',
  paddingHorizontal: 5,
  borderRadius: 3,
  fontSize: 12,
},
});


