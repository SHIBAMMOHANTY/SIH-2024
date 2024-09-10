import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Correct import

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.scrollView} >
        {/* Existing Container */}
        <View style={styles.container}>
          <Text style={styles.headingText}>Where's my team</Text>
          <Text style={styles.subHeading}>
            Enable GPS reminder for managers, and receive alerts once your team member leaves a work location during working hours.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go to Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Existing Status Section */}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Who's in/out
            </Text>
          </View>

          <View style={styles.statusContainer}>
            <View style={styles.statusBlock}>
              <Text style={styles.statusNumber}>0</Text>
              <Text style={styles.statusLabel}>In</Text>
            </View>
            <View style={styles.statusBlock}>
              <Text style={styles.statusNumber}>0</Text>
              <Text style={styles.statusLabel}>Break</Text>
            </View>
            <View style={styles.statusBlock}>
              <Text style={styles.statusNumber}>0</Text>
              <Text style={styles.statusLabel}>Out</Text>
            </View>
          </View>
        </View>

        {/* New Tracked Hours Section */}
        <View style={styles.trackedHoursContainer}>
          <Text style={styles.trackedHoursHeader}>Tracked hours</Text>

          {/* Hours Summary */}
          <View style={styles.hoursSummary}>
            <View style={styles.hoursSummaryBlock}>
              <Text style={styles.hoursNumber}>-</Text>
              <Text style={styles.hoursLabel}>WORKED</Text>
            </View>
            <View style={styles.hoursSummaryBlock}>
              <Text style={styles.hoursNumber}>-</Text>
              <Text style={styles.hoursLabel}>BREAKS</Text>
            </View>
            <View style={styles.hoursSummaryBlock}>
              <Text style={styles.hoursNumber}>-</Text>
              <Text style={styles.hoursLabel}>OVERTIME</Text>
            </View>
          </View>

          {/* Graph Placeholder */}
          <View style={styles.graphPlaceholder}>
            <Text>Graph Placeholder</Text>
          </View>

          {/* Legend */}
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: 'green' }]} />
              <Text style={styles.legendText}>Worked hours</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: 'orange' }]} />
              <Text style={styles.legendText}>Breaks</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: 'red' }]} />
              <Text style={styles.legendText}>Overtime hours</Text>
            </View>
          </View>

          {/* Disclaimer */}
          <Text style={styles.disclaimer}>
            Does not include manually entered payroll hours
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20, 
  },
  container: {
    marginTop: 16,
    width: '90%',
    alignSelf: 'center',
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
  statusNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusLabel: {
    fontSize: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20, // Added margin to give some space above
  },
  statusBlock: {
    alignItems: 'center',
    paddingHorizontal: 10, // Added padding to space out status blocks
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
    paddingBottom: 10,
    paddingVertical: 20,  // More padding for vertical space
    paddingHorizontal: 16, // Horizontal padding for extra space on the sides
    backgroundColor: '#f8f9fa', // Light gray background for the header section
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* New styles for tracked hours section */
  trackedHoursContainer: {
    marginTop: 16,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderColor: '#dadada',
    borderWidth: 1,
  },
  trackedHoursHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  hoursSummary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  hoursSummaryBlock: {
    alignItems: 'center',
  },
  hoursNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hoursLabel: {
    fontSize: 14,
    color: '#777',
  },
  graphPlaceholder: {
    height: 150, // Placeholder height for the graph
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#777',
  },
  disclaimer: {
    fontSize: 10,
    color: '#999',
    textAlign: 'center',
  },
});

