import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function Launch_attendance() {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleMarkAttendance = () => {
    Alert.alert("Attendance", "Attendance enrolled successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi!</Text>
      <Text style={styles.instruction}>Enroll your fingerprint below and click mark attendance when done</Text>
      <TextInput
        style={styles.input}
        placeholder="Course Name"
        value={courseName}
        onChangeText={setCourseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Course Code"
        value={courseCode}
        onChangeText={setCourseCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Time slot (dd-mm-yy)"
        value={timeSlot}
        onChangeText={setTimeSlot}
      />
      <View style={styles.fingerprintSection}>
        <Text style={styles.enrollText}>ENROLL FINGERPRINT</Text>
        <View style={styles.fingerprintIcon}>
          <Text style={styles.fingerprintText}>FINGERPRINT 1</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.attendanceButton} onPress={handleMarkAttendance}>
        <Text style={styles.attendanceButtonText}>MARK ATTENDANCE</Text>
      </TouchableOpacity>
      <Text style={styles.successText}>Attendance enrolled successfully!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  fingerprintSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  enrollText: {
    fontSize: 14,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  fingerprintIcon: {
    width: 100,
    height: 100,
    backgroundColor: '#f3e5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  fingerprintText: {
    color: '#7e57c2',
    marginTop: 10,
    alignment: 'center',
  },
  attendanceButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#607d8b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  attendanceButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  successText: {
    color: '#4caf50',
    fontSize: 14,
    marginTop: 20,
  },
});
