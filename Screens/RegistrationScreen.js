import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";

// ------------------------------------------------------------------
const initialState = {
  name: "",
  email: "",
  password: "",
};
// ------------------------------------------------------------------
export const FormRegistration = () => {
  const [state, setState] = useState(initialState);

  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  console.log(isShowKeyboard);
    // const [isShowBtn, setIsShowBtn] = useState(true);

  const [type, setType] = useState(false);
   
    const onPressFunction = () => {
        // setIsSecureEntry(false);
//  console.log("IsSecureEntry", isSecureEntry);
        setType("text");
    };

  const keyboardHide = () => {
      setIsShowKeyboard(false);
    //  setIsShowBtn(true);
    console.log(setIsShowKeyboard);

    Keyboard.dismiss();
      console.log(state);
    //   setIsShowBtn(false);
    setState(initialState);
  };

  const keyboardHideAndSubmit = () => {
    setIsShowKeyboard(false);
      Keyboard.dismiss();
        // setIsShowBtn(true);
    console.log("Registration Form state:", state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/bg-montaine.jpeg")}
        >
          <View style={styles.containerWhite}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              {/* //! ---------------- контейнер: form ---------------- */}
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? 0 : 62,
                }}
              >
                <View style={styles.avatar}>
                  <Image style={styles.img}></Image>
                </View>
                <Text style={styles.text}>Реєстрація!</Text>
                <TextInput
                  style={styles.input}
                  placeholder={"Логін"}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, name: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.name}
                />
                <TextInput
                  style={styles.input}
                  placeholder={"Адреса електронної пошти"}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                />
                <View style={styles.inputSection}>
                  <TextInput
                    style={styles.inputPassword}
                                      placeholder={"Пароль"}
                       type={type}                
                secureTextEntry={type ? false : true}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                                      onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    // secureTextEntry={isSecureEntry}
                    // iconPosition="right"
                  />
                  <Pressable
                    style={styles.show}
                    onPress={onPressFunction}
                  >
                    <Text style={styles.showText}>Показати</Text>
                  </Pressable>
                </View>
                {/* //! ---------- Кнопка: Зареєструватися -------- */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  
                  // style={{
                  //   ...styles.btn,
                  //   visibility: isShowBtn ? "visible" : "hidden",
                  // }}
                  style={styles.btn}
                  onPress={() => keyboardHideAndSubmit()}
                >
                  <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                {/* //! ---------- Кнопка: Вже є акаунт? Увійти -------- */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => null}
                  style={styles.btnLogin}
                >
                  <Text style={styles.btnTitleLogin}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
        </View>

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    justifyContent: "flex-end",
  },
  containerWhite: {
    // flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    bottom: 0,
    // marginTop: 263,
    marginBottom: 0,
    justifyContent: "flex-end",
  },
  form: {
    // marginBottom: 62,
    marginHorizontal: 16,
  },
  avatar: {
    alignItems: "center",
    marginBottom: 92,
  },
  img: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  text: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.01,
    // marginLeft: 80,
    // marginRight: 79,
    marginBottom: 33,
  },
  input: {
    height: 50,
    marginTop: 0,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    color: "#BDBDBD",
    },
   show: {
    position: "absolute",
    right: 100,
    transform: [{ translateX: 100 }],
       padding: 16,
    // width:71,
  },
  inputSection: {
    position: "relative",
    height: 50,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    color: "#212121",
    justifyContent: "center",
    alignItems: "baseline",
    },
  inputPassword: {
    position: "absolute",
    padding: 16,
    },
  showText: {
    color: "#1B4371",
  },
  btn: {
    height: 51,
    marginTop: 27,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnLogin: {
    color: "#1B4371",
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
