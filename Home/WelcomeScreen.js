import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function WelcomeScreen({navigation}) {
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.circlesContainer}>
          <View style={[styles.circle, styles.largeCircle]} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Vouch4Me</Text>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, styles.enlargedImage]}
            source={require('../assets/logo.png')} // replace with your image path
          />
        </View>
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.getStartedButtonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: -100,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  circlesContainer: {
    flexDirection: 'row',
  },
  circle: {
    width: 250,
    height: 250,
    backgroundColor: '#7b9bb0',
    borderRadius: 125,
    marginVertical: 250,
    marginTop: -10,
    marginHorizontal: -75,
    paddingLeft: 225,
  },
  largeCircle: {
    width: 220,
    height: 220,
    borderRadius: 150,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    color: '#7b9bb0',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  enlargedImage: {
    width: '120%',
    height: '120%',
  },
  getStartedButton: {
    backgroundColor: '#7b9bb0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});
