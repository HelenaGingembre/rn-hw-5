import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { PostsScreen } from './PostsScreen';
import { User } from '../../components/user';

export const Home = () => {
    return <PostsScreen />;
    // <View style={styles.container}>
    //   <User />
    // <PostsScreen />
    // </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
