import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Публiкацii</Text>
            {/* //! ------------- контейнер: photoFrame ------------ */}
            <View style={styles.photoFrame}></View>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleHeader: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 1.29,
        textAlign: 'center',
        letterSpacing: -0.408,
        color: '#212121',
    },
    photoFrame: {
        width: 60,
        height: 60,
        backgroundColor: '#F6F6F6',
        marginTop: -60,
        borderRadius: 16,
    },
});
