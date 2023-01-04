import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

import { Platform } from 'react-native';

import { useRoute } from './router';

// import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function App() {
    console.log(Platform.OS);

    // const [appIsReady, setAppIsReady] = useState(false);
    const routing = useRoute(true);

    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });

    /* useEffect(() => {
        async function prepare() {
            try {
                console.log('Pre-load fonts');
                await SplashScreen.preventAutoHideAsync();
            } catch (e) {
                console.log('error load fonts');
                console.warn(e);
            }
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        console.log('error fonts loader');
        // return undefined;
        return null;
    } else {
        SplashScreen.hideAsync();
    }
*/
    const onFontsLoaded = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    /*
    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts, make any API calls you need to do here
                console.log('Pre-load fonts');
                await Font.loadAsync({
                    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
                    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
                });
                // await Font.loadAsync(Feather.font);
                // await Font.loadAsync(AntDesign.font);
                // await Font.loadAsync(MaterialIcons.font);
            } catch (e) {
                console.log('error load fonts');
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
*/
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
