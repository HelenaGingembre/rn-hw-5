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

    <FormRegistration />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   fontFamily: "Roboto",
  //   fontStyle: "normal",
  //   fontWeight: 400,
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
  // title: {
  //   marginTop: 16,
  //   paddingVertical: 8,
  //   borderColor: "#20232a",
  //   color: "#fff",
  //   textAlign: "center",
  //   fontSize: 30,
  //   fontWeight: "bold",
  // },
  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   // justifyContent: "center",
  //   justifyContent: "flex-end",
  // },
});
