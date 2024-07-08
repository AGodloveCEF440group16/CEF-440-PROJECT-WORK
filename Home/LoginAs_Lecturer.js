import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function LoginAs_Lecturer({ navigation }) {
  

  return (
    <View style={styles.container}>
     
      <Text style={styles.headerText}>LOGIN </Text>
      
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity style={styles.eyeButton}>
          <Text style={styles.eyeText}>👁</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lecturer')}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.footerText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.footerText}>Don't have an account? Sign up</Text>
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
    backgroundColor: '#F5F5F5',
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.6,
    marginBottom: 24,
  },
  userTypeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderColor: '#1E90FF',
    borderWidth: 1,
    borderRadius: 8,
  },
  selectedUserType: {
    backgroundColor: '#1E90FF',
  },
  userTypeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E90FF',
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
  passwordContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  eyeButton: {
    position: 'absolute',
    right: 8,
  },
  eyeText: {
    fontSize: 20,
  },
  button: {
    width: width * 0.8,
    height: 40,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#1E90FF',
    fontSize: 14,
    marginTop: 8,
  },
});

