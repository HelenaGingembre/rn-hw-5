import React from "react";
import { Platform } from "react-native";
import { FormRegistration } from "./Screens/auth/RegistrationScreen";
// import { LoginForm } from "./Screens/auth/LoginScreen";

export default function App() {
  console.log(Platform.OS);
 
  return (
     <FormRegistration />
    // <LoginForm />
  );
}
