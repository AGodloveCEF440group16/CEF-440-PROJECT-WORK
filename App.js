import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Admin_dashboard from './components/admin/Admin_dashboard';

import Signup from './Home/Signup';
import WelcomeScreen from './Home/WelcomeScreen';
import MainStack from './navigation/MainStack';




export default function App() {
  return (
    <MainStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
