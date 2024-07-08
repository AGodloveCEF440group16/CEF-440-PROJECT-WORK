import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCheckBox = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, value && styles.checkedCheckbox]}
      onPress={() => onValueChange(!value)}
    >
      {value ? <Text style={styles.checkboxTick}>✓</Text> : null}
    </TouchableOpacity>
  );
};

export default function ManageAttendance() {
  const [studentName, setStudentName] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [present, setPresent] = useState(false);
  const [absent, setAbsent] = useState(false);
  const [permission, setPermission] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  const handleMarkAttendance = () => {
    // Add your attendance marking logic here
    setEnrolled(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>MANUAL ATTENDANCE</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Student Name:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter name" 
            value={studentName} 
            onChangeText={setStudentName} 
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>School ID:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter ID" 
            value={schoolId} 
            onChangeText={setSchoolId} 
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Course Code:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter course code" 
            value={courseCode} 
            onChangeText={setCourseCode} 
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Time slot:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="dd-mm-yy" 
            value={timeSlot} 
            onChangeText={setTimeSlot} 
          />
        </View>
      </View>
      <Text style={styles.optionsLabel}>OPTIONS:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxGroup}>
          <Text style={styles.checkboxLabel}>Present</Text>
          <CustomCheckBox 
            value={present}
            onValueChange={setPresent}
          />
        </View>
        <View style={styles.checkboxGroup}>
          <Text style={styles.checkboxLabel}>Absent</Text>
          <CustomCheckBox 
            value={absent}
            onValueChange={setAbsent}
          />
        </View>
        <View style={styles.checkboxGroup}>
          <Text style={styles.checkboxLabel}>Permission</Text>
          <CustomCheckBox 
            value={permission}
            onValueChange={setPermission}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.markButton} onPress={handleMarkAttendance}>
        <Text style={styles.markButtonText}>MARK ATTENDANCE</Text>
      </TouchableOpacity>
      {enrolled && <Text style={styles.successMessage}>Attendance enrolled successfully!!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2'
  },
  formContainer: {
    marginBottom: 20,
  },
  inputGroup: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#4A90E2'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  optionsLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#4A90E2'
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginRight: 5,
    color: '#4A90E2'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#4A90E2',
  },
  checkboxTick: {
    color: '#fff',
    fontWeight: 'bold',
  },
  markButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  markButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    marginTop: 20,
    color: '#4A90E2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
