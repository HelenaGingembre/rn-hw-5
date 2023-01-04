import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

import { Platform } from 'react-native';

import { useRoute } from './router';

export default function App() {
    console.log(Platform.OS);

    const routing = useRoute(true);
    // const routing = useRoute({});

    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });

    const onFontsLoaded = useCallback(async () => {
        if (fontsLoaded) {
            try {
                console.log('Pre-load fonts');
                console.log('fonts loaded');
                await SplashScreen.hideAsync();
            } catch (e) {
                console.log('error load fonts');
                console.warn(e);
            }
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onFontsLoaded}>
            <NavigationContainer>{routing}</NavigationContainer>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
});
