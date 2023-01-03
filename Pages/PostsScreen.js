import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const PostsScreen = ({}) => {
    return (
        <View style={styled.container}>
            <View style={styled.container}>
                <Text>PostsScreen</Text>
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
