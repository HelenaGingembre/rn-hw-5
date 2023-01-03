import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';

import { Platform } from 'react-native';
import { FormRegistration } from './Screens/auth/RegistrationScreen';
import { LoginForm } from './Screens/auth/LoginScreen';
import { Home } from './Pages/Home';

const loadApplication = async () => {
    await Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });
};

const MainStack = createStackNavigator(); // указывает на группу навигаторов

export default function App() {
    console.log(Platform.OS);
    const [iasReady, setIasReady] = useState(false);

    if (!iasReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onFinish={() => setIasReady(true)}
                onError={console.log('error loading fonts')}
            />
        );
    }
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
                    options={{ title: 'Публiкацii' }}
                />
            </MainStack.Navigator>
        </NavigationContainer>

        // <FormRegistration />
        // <LoginForm />
    );
}
