import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Add_student() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    // Add your enrollment logic here
    setEnrolled(true);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Hi!</Text>
      <Text style={styles.subtitle}>welcome to our system and provide us with your info!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="School ID"
        value={schoolId}
        onChangeText={setSchoolId}
      />
      <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
        <Text style={styles.enrollButtonText}>ENROLL FINGERPRINT</Text>
      </TouchableOpacity>
      <View style={styles.fingerprintsContainer}>
        <TouchableOpacity style={styles.fingerprint}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/fingerprint.png' }} style={styles.fingerprintIcon} />
          <Text style={styles.fingerprintText}>FINGERPRINT 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fingerprint}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/fingerprint.png' }} style={styles.fingerprintIcon} />
          <Text style={styles.fingerprintText}>FINGERPRINT 2</Text>
        </TouchableOpacity>
      </View>
      {enrolled && <Text style={styles.successMessage}>Student successfully Enrolled!!!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10,
    padding: 5,
  },
  enrollButton: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  enrollButtonText: {
    fontWeight: 'bold',
  },
  fingerprintsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fingerprint: {
    alignItems: 'center',
  },
  fingerprintIcon: {
    width: 50,
    height: 50,
  },
  fingerprintText: {
    marginTop: 10,
  },
  successMessage: {
    marginTop: 20,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});
