import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

import { Login } from './Screens/auth/LoginScreen';
import { Registration } from './Screens/auth/RegistrationScreen';
import { PostsScreen } from './Screens/main/PostsScreen';
import { CreatePostsScreen } from './Screens/main/CreatePostsScreen';
import { ProfileScreen } from './Screens/main/ProfileScreen';
import { Home } from './Screens/main/Home';

// icons import
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

export const useRoute = isAuth => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator initialRouteName="Registration">
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Registration"
                    component={Registration}
                />
                <AuthStack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login"
                    component={Login}
                />
                <AuthStack.Screen
                    component={Home}
                    name="Posts"
                    options={{ headerTitleAlign: 'center' }}
                />
            </AuthStack.Navigator>
        );
    }
    return (
        <MainTabs.Navigator
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
            <MainTabs.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    headerShown: true,
                    tabBarShowLabel: false,
                    headerTitleStyle: { marginLeft: 160 },
                    tabBarIcon: ({ focused, size, color }) => (
                        <Feather
                            name="grid"
                            style={focused && styles.focusNav}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: 'rgba(33, 33, 33, 0.8)',
                }}
            />
            <MainTabs.Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={{
                    headerShown: true,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign
                            name="pluscircle"
                            style={focused && styles.focusNav}
                            size={24}
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
            <MainTabs.Screen
                name="Profiler"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign
                            style={focused && styles.focusNav}
                            name="user"
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: '#FF6C00',
                    tabBarInactiveTintColor: '#BDBDBD',
                }}
            />
        </MainTabs.Navigator>
    );
};

const styles = StyleSheet.create({
    focusNav: {
        paddingVertical: 7,
        paddingHorizontal: 28,
        borderRadius: 20,
        backgroundColor: '#FF6C00',
        color: '#fff',
    },
});
