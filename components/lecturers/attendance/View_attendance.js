import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default function View_attendance() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ATTENDANCE HISTORY</Text>
      <Image
        source={require('../../../assets/atten.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Course Name"
      />
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Student Name</Text>
          <Text style={styles.tableHeader}>Attendance status</Text>
          <Text style={styles.tableHeader}>Date</Text>
        </View>
        {/* Add table rows dynamically here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  backButtonText: {
    fontSize: 24,
    color: '#1E90FF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#607D8B',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
  },
  input: {
    width: width * 0.8,
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  table: {
    width: width * 0.8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  tableHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#607D8B',
    flex: 1,
    textAlign: 'center',
  },
});

