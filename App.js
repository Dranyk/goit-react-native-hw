import { StyleSheet, View } from "react-native";
import { useState, useCallback  } from "react";

import { useFonts } from 'expo-font';

import LoginScreen from "./Screens/Authorization/LoginScreen";
import RegistrationScreen from "./Screens/Authorization/RegistrationScreen";


export default function App() {

  const [loaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
