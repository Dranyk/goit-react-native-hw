import React, { useState, use } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import styles from "./auth.styles";

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bcgImage}
          source={require("../../images/Photo_BG.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.formWrapper}>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? 20 : 144,
                }}
              >
                <Text style={styles.title}>Увійти</Text>
                <TextInput
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholder="Адреса електронної пошти"
                  style={styles.input}
                />
                <View>
                  <TextInput
                    onFocus={() => setIsShowKeyboard(true)}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    style={styles.input}
                  />
                  <Text style={styles.inputShowPasword}>Показати</Text>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.singInText}>
                    Немає облікового запису? Зареєструватись
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
