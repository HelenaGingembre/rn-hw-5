import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  // Text,
  // View,
  // ImageBackground,
  Platform,
  // KeyboardAvoidingView,
  // TouchableWithoutFeedback,
  // Keyboard,
} from "react-native";
import { FormRegistration } from "./Screens/RegistrationScreen";
import { LoginForm } from "./Screens/LoginScreen";

export default function App() {
  console.log(Platform.OS);
  return (
    // <View style={styles.container}>
    //   <ImageBackground
    //     style={styles.image}
    //     source={require("./assets/images/bg-montaine.jpeg")}
    //   >
    //     <FormRegistration />
    //     <StatusBar style="auto" />
    //   </ImageBackground>
    // </View>

    // <FormRegistration />
    <LoginForm />
  );
}
