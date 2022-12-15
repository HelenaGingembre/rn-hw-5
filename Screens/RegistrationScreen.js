import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
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
  //   const [text, onChangeText] = useState("");
  //   const [mail, onChangeMail] = useState("");
  //   const [password, onChangePassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  console.log(isShowKeyboard);
  //   const [isShowBtn, setIsShowBtn] = useState(true);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    console.log(setIsShowKeyboard);
    // setIsShowBtn(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
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
                  placeholder={"Адреса електроної пошти"}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                />
                <TextInput
                  style={styles.input}
                  placeholder={"Пароль"}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  secureTextEntry={isSecureEntry}
                  iconPosition="right"
                  // secureTextEntry={true}
                  // secureTextEntry={this.props.isSecure ? this.props.isSecure : false}
                />
                {/* //! ---------- Кнопка: Зареєструватися -------- */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  //   onFocus={() => setIsShowBtn(true)}
                  // style={{
                  //   ...styles.btn,
                  //   visibility: isShowBtn ? "visible" : "hidden",
                  // }}
                  style={styles.btn}
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
