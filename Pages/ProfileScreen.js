import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ProfileScreen = ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>ProfileScreen</Text>
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
