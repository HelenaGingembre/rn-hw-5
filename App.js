import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Platform } from 'react-native';
import { FormRegistration } from './Screens/auth/RegistrationScreen';
import { LoginForm } from './Screens/auth/LoginScreen';
import { Home } from './Pages/Home';

const MainStack = createStackNavigator(); // указывает на группу навигаторов

export default function App() {
    console.log(Platform.OS);
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Home">
                {/* Замена Switch */}
                <MainStack.Screen
                    name="Registration"
                    component={FormRegistration}
                />
                {/* Замена Route */}
                <MainStack.Screen name="Login" component={LoginForm} />
                <MainStack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Start screen' }}
                />
            </MainStack.Navigator>
        </NavigationContainer>

        // <FormRegistration />
        // <LoginForm />
    );
}
