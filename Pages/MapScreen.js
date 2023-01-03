import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const MapScreen = ({}) => {
    return (
        <View style={styled.container}>
            <View style={styled.container}>
                <Text>MapScreen</Text>
            </View>
        </View>
    );
};

const styled = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
