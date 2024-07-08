import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Signup = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.circlesContainer}>
              <View style={[styles.circle, styles.largeCircle]} />
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.greeting}>Hi!</Text>
            <Text style={styles.subtitle}>Create an Account</Text>
            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Contact" keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.footer} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
                <Text style={styles.footerLink}>sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
}

export default Signup

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 30,
      backgroundColor: '#fff',
    },
    header: {
      position: 'absolute',
      top: -60,
      right: -50,
    },
    circlesContainer: {
      flexDirection: 'row',
    },
    circle: {
      width: 100,
      height: 100,
      backgroundColor: '#7b9bb0',
      borderRadius: 50,
      margin: 10,
    },
    largeCircle: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    formContainer: {
      marginTop: 150,
    },
    greeting: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 10,
      marginVertical: -100,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#7b9bb0',
      borderBottomWidth: 1,
      marginBottom: 20,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#7b9bb0',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerText: {
      fontSize: 14,
    },
    footerLink: {
      fontSize: 14,
      color: '#7b9bb0',
      marginLeft: 5,
    },
  });