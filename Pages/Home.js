import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

import { PostsScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
    return (
        <Tabs.Navigator
            initialRouteName="Posts"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [{ display: 'flex' }, null],
                tabBarStyle: {
                    paddingHorizontal: 50,
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 60,
                },
            }}
        >
            <Tabs.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    headerShown: true,
                    title: 'Публiкацii',
                    headerTitleStyle: { marginLeft: 160 },
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 20 }}
                            onPress={() => {
                                navigation.navigate('Login');
                            }}
                        >
                            <MaterialIcons
                                name="logout"
                                size={24}
                                color="#BDBDBD"
                            />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused, size, color }) => (
                        <Feather name="grid" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#ff6c00',
                    tabBarInactiveTintColor: '#BDBDBD',
                }}
            />
            <Tabs.Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={{
                    title: 'Cтворити Публiкацii',
                    headerShown: true,
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign
                            name="pluscircle"
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#BDBDBD',
                    tabBarItemStyle: {
                        backgroundColor: '#FF6C00',
                        borderRadius: 20,
                    },
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#FF6C00',
                    tabBarInactiveTintColor: '#BDBDBD',
                }}
            />
        </Tabs.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
