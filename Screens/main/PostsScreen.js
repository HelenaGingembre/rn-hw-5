import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';

// import { Header } from '../../components/header';
import { User } from '../../components/user';
import { Publication } from '../../components/publications';
import { Login } from '../../Screens/auth/LoginScreen';

// import photo1 from '../../assets/images/post_1.png';
// import photo2 from '../../assets/images/post_2.png';

export const PostsScreen = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);
    console.log('route.params--->', route.params);

    useEffect(() => {
        if (route.params) {
            setPosts(prev => [...prev, route.params]);
        }
    }, [route.params]);
    // console.log('posts : ', posts);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <User />
                <FlatList
                    data={posts}
                    keyExtractor={(item, indx) => indx.toString()}
                    renderItem={({ item }) => (
                        <Publication
                            key={item.id}
                            title={item.data.name}
                            place={item.data.place}
                            image={item.photo}
                            comments={0}
                            location={item.location}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 30,
        paddingHorizontal: 16,
    },
});
