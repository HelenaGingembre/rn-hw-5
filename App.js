import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';

import { Platform } from 'react-native';
import { Registration } from './Screens/auth/RegistrationScreen';
import { Login } from './Screens/auth/LoginScreen';
import { Home } from './Screens/main/Home';

import { useRoute } from './router';

const loadApplication = async () => {
    await Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });
};

export default function App() {
    console.log(Platform.OS);
    const [iasReady, setIasReady] = useState(false);
    const routing = useRoute(1);

    if (!iasReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onFinish={() => setIasReady(true)}
                onError={console.log('error loading fonts')}
            />
        );
    }
    return <NavigationContainer>{routing}</NavigationContainer>;
}
