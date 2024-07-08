import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
Admin_dashboard

import Signup from '../Home/Signup';
import WelcomeScreen from '../Home/WelcomeScreen';
import LoginScreen from '../Home/LoginScreen';
import Admin_dashboard from '../components/admin/Admin_dashboard';
import Add_student from '../components/admin/students/Add_student';
import Manage_lecturer from '../components/admin/lecturer/Manage_lecturer';
import LoginAs_Admin from '../Home/LoginAs_Admin';
import LoginAs_Lecturer from '../Home/LoginAs_Lecturer';
import Lecturer_dashboard from '../components/lecturers/Lecturer_dashboard';
import Launch_attendance from '../components/lecturers/attendance/Launch_attendance';
import Manage_attendance from '../components/lecturers/attendance/Manage_attendance';
import View_attendance from '../components/lecturers/attendance/View_attendance';
import Add_course from '../components/admin/course/Add_course';
import Reporting from '../components/admin/reports/Reporting';
import Info from '../components/lecturers/info/Info';










const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Admin" component={Admin_dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="Lecturer" component={Lecturer_dashboard} options={{ headerShown: false }} />

      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Add_Student" component={Add_student} />
      <Stack.Screen name="Manage_Lecturer" component={Manage_lecturer} />
      <Stack.Screen name="LoginAs_Admin" component={LoginAs_Admin} />
      <Stack.Screen name="LoginAs_Lecturer" component={LoginAs_Lecturer} />
      <Stack.Screen name="Launch_Attendance" component={Launch_attendance} />
      <Stack.Screen name="Manage_Attendance" component={Manage_attendance} />
      <Stack.Screen name="View_Attendance" component={View_attendance} />
      <Stack.Screen name="Add_Course" component={Add_course} />
      <Stack.Screen name="Report" component={Reporting} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStack