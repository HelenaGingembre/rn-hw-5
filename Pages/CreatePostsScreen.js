import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const CreatePostsScreen = ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>CreatePostsScreen</Text>
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
