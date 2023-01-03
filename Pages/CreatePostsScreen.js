import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const CreatePostsScreen = ({}) => {
    return (
        <View style={styled.container}>
            <View style={styled.container}>
                <Text>CreatePostsScreen</Text>
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
