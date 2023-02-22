import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import LoginScreen from './Screens/Authorization/LoginScreen';
import RegistrationScreen from './Screens/Authorization/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
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
});
