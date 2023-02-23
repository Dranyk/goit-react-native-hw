import { StyleSheet, View } from "react-native";
import { useState } from "react";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";
import LoginScreen from "./Screens/Authorization/LoginScreen";
import RegistrationScreen from "./Screens/Authorization/RegistrationScreen";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
