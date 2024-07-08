import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function AdminDashboard({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/admin-settings-male.png' }} style={styles.profileIcon} />
        <Text style={styles.headerText}>ADMIN</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add_Student')}>
            <Image source={require('../../assets/addstudent.jpg')} style={styles.icon} />
            <Text style={styles.buttonText}>ADD STUDENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('View_Attendance')}>
            <Image source={require('../../assets/viewattendance.png')} style={styles.icon} />
            <Text style={styles.buttonText}>VIEW ATTENDANCE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Report')}>
            <Image source={require('../../assets/reports.png')} style={styles.icon} />
            <Text style={styles.buttonText}>REPORTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Manage_Lecturer')}>
            <Image source={require('../../assets/managelecturer.png')} style={styles.icon} />
            <Text style={styles.buttonText}>MANAGE LECTURER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.centeredButton]} onPress={() => navigation.navigate('Add_Course')}>
            <Image source={require('../../assets/addcourses.jpg')} style={styles.icon} />
            <Text style={styles.buttonText}>ADD COURSES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#E0E0E0',
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  centeredButton: {
    width: '90%',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
