import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Info() {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.iconContainer}>
        <Image 
        source={require('../../../assets/info.png')}   
          style={styles.infoIcon} 
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Lecturer Name:</Text>
          <TextInput style={styles.input} placeholder="Enter name" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder="Enter email" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Course Teaching:</Text>
          <TextInput style={styles.input} placeholder="Enter course" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Time slot:</Text>
          <TextInput style={styles.input} placeholder="dd-mm-yy" />
        </View>
      </View>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoIcon: {
    width: 100,
    height: 100,
  },
  formContainer: {
    flex: 1,
  },
  inputGroup: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});
