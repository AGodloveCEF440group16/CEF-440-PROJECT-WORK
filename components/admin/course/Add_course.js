import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default function Add_course() {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleAddCourse = () => {
    alert('Course added successfully!');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>ADD COURSES</Text>
      <Image
        source={require('../../../assets/COURSES.jpg')}
        style={styles.image}
      />
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
        placeholder="Lecturer"
        value={lecturer}
        onChangeText={setLecturer}
      />
      <TextInput
        style={styles.input}
        placeholder="Time Slot"
        value={timeSlot}
        onChangeText={setTimeSlot}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCourse}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
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
  button: {
    width: width * 0.8,
    height: 40,
    backgroundColor: '#607D8B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

