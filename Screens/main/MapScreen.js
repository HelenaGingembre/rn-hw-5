import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export const MapScreen = ({ route }) => {
    // const [location, setLocation] = useState(null);
    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestPermissionsAsync();
    //         if (status !== 'granted') {
    //             console.log('Permission to access location was denied');
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         const coords = {
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude,
    //         };
    //         setLocation(coords);
    //     })();
    // }, []);

    console.log(route.params);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        // ...location,
                        longitude: route.params.longitude,
                        latitude: route.params.latitude,
                        longitudeDelta: 0.001,
                        latitudeDelta: 0.001,
                    }}
                    showsUserLocation={true}
                >
                    {(route.params.longitude || route.params.latitude) && (
                        <Marker
                            title="I am here"
                            coordinate={{
                                longitude: route.params.longitude,
                                latitude: route.params.latitude,
                            }}
                            description="Hello"
                        />
                    )}
                </MapView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapStyle: {
        width: '100%',
        heigh: '100%',
    },
});
