import { } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import { useRoute } from "./router";

// import LoginScreen from "./Screens/Authorization/LoginScreen";
// import RegistrationScreen from "./Screens/Authorization/RegistrationScreen";
// import PostsScreen from "./Screens/Main/PostsScreen";

// const AuthStack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const routing = useRoute(true);

  if (!loaded) {
    return null;
  }

  return (
    //   <NavigationContainer>
    //   <AuthStack.Navigator>
    //     <AuthStack.Screen
    //       options={{
    //         headerShown: false,
    //       }}
    //       name="Login"
    //       component={LoginScreen}
    //     />
    //     <AuthStack.Screen
    //       options={{
    //         headerShown: false,
    //       }}
    //       name="Registration"
    //       component={RegistrationScreen}
    //     />
    //   </AuthStack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    // <PostsScreen />
    //   </NavigationContainer>

     <NavigationContainer>{routing}</NavigationContainer>
  );
}
