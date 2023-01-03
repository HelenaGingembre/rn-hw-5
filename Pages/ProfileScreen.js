import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ProfileScreen = ({}) => {
    return (
        <View style={styled.container}>
            <View style={styled.container}>
                <Text>ProfileScreen</Text>
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
