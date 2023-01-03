import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import { PostsScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
    return (
        // <View style={styles.container}>
        //     <Text style={styles.titleHeader}>Публiкацii</Text>
        //     {/* //! ------------- контейнер: photoFrame ------------ */}
        //     <View
        //         style={styles.photoFrame}
        //         source={require('../assets/images/avatar.png')}
        //     ></View>
        //     <Text style={styles.textUsername}>Natali Romanova</Text>
        //     <Text style={styles.textEmail}>email@example.com</Text>
        // </View>
        <Tabs.Navigator
            initialRouteName="PostsScreen"
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
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: { marginLeft: 160 },
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 20 }}
                            onPress={() => {
                                navigation.navigate('Login');
                            }}
                        >
                            <Ionicons
                                name="md-exit-outline"
                                size={24}
                                color="#BDBDBD"
                            />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused, size, color }) => (
                        // <Feather name="grid" size={24} color="black" />
                        <Feather name="grid" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#ff6c00',
                    tabBarInactiveTintColor: '#BDBDBD',
                }}
            />
            <Tabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                options={{
                    headerShown: false,
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
                name="ProfileScreen"
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
    textUsername: {
        fontWeight: 700,
        fontSize: 13,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
    },
    textEmail: {
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 13,
        display: 'flex',
        alignItems: 'center',
    },
});
