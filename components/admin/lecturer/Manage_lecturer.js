import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function Manage_lecturer({navigation}) {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LECTURER MANAGEMENT</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.validateIcon}>
            <Text style={styles.iconText}>VALIDATE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.deleteIcon}>
            <Text style={styles.iconText}>DELETE</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.warning}>Warning!!! This action is irreversible. Check twice before confirming.</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
       
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        
      />
      <TouchableOpacity style={styles.confirmButton} >
        <Text style={styles.confirmButtonText}>CONFIRM</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  validateIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#e0f7ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  deleteIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#ffebee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  iconText: {
    fontSize: 10,
    color: '#000',
    marginTop: 5,
  },
  warning: {
    color: '#f00',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  confirmButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#607d8b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
