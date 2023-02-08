import React from 'react';
import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DefaultScreenPosts } from '../nested/DefaultScreenPosts';
import { CommentsScreen } from '../nested/CommentsScreen';
import { MapScreen } from '../nested/MapScreen';

// const NestedScreen = createStackNavigator();
const NestedScreen = createNativeStackNavigator();

export const PostsScreen = ({ route, navigation }) => {
    console.log('route-PostsScreen--', route);

    return (
        <NestedScreen.Navigator initialRouteName="DefaultScreen">
            <NestedScreen.Screen
                name="DefaultScreen"
                component={DefaultScreenPosts}
                options={({ route, navigation }) => ({
                    headerShown: false,
                })}
            />
            <NestedScreen.Screen name="Comments" component={CommentsScreen} />
            <NestedScreen.Screen name="Map" component={MapScreen} />
        </NestedScreen.Navigator>
    );
};
