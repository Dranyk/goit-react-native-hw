import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import styles from "./auth.styles";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [hidePass, setHidePass] = useState(true);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;

      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
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
                  width: dimensions,
                }}
              >
                <Text style={styles.title}>Увійти</Text>
                <View>
                  <TextInput
                    onFocus={() => setIsShowKeyboard(true)}
                    placeholder="Адреса електронної пошти"
                    style={styles.input}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>

                <View>
                  <TextInput
                    onFocus={() => setIsShowKeyboard(true)}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    style={styles.input}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />

                  <Text
                    style={styles.inputShowPasword}
                    onPress={() => setHidePass(!hidePass)}
                  >
                    Показати
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
