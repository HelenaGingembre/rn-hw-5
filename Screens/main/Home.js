import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

import { PostsScreen } from './PostsScreen';
// import { CreatePostsScreen } from './CreatePostsScreen';
// import { ProfileScreen } from './ProfileScreen';

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
    return <PostsScreen></PostsScreen>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
