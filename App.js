import {} from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { useRoute } from "./router";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const routing = useRoute(true);

  if (!loaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
