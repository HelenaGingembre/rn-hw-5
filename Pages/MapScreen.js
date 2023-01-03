import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const MapScreen = ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>MapScreen</Text>
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
});
