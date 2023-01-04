import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    FlatList,
} from 'react-native';

import { Publication } from '../../components/publications';

const POSTS = [
    {
        id: '45k6-j54k-4jth',
        title: 'Dnipro',
        image: '../assets/images/post_2.png',
        comments: '',
        location: 'Dnipro, Ukraine',
    },
    {
        id: '4116-jfk5-43rh',
        title: 'Poltava',
        image: '../assets/images/post_1.png',
        comments: '',
        location: 'Poltava, Ukraine',
    },
    {
        id: '4d16-5tt5-4j55',
        title: 'Kyiv',
        image: '../assets/images/post_2.png',
        comments: '',
        location: 'Kyiv, Ukraine',
    },
    {
        id: 'LG16-ant5-0J25',
        title: 'Lviv',
        image: '../assets/images/post_1.png',
        comments: '',
        location: 'Lviv, Ukraine',
    },
];

export const ProfileScreen = ({}) => {
    const [posts, setPosts] = useState(POSTS);

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bgImg}
                source={require('../../assets/images/bg-montaine.jpeg')}
            >
                {/* <ScrollView></ScrollView> */}
                <Text style={styles.publicationTitle}>PROFILE</Text>
                <SafeAreaView style={styles.main}>
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => {
                            <Publication
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                comments={item.comments}
                                location={item.location}
                            />;
                        }}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImg: {
        flex: 1,
        width: '100%',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 30,
        paddingHorizontal: 16,
    },
    publicationTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 50,
        marginTop: 50,
        marginHorizontal: 40,
        alignItems: 'center',
        color: '#ffff',
    },
    img: {
        width: '100%',
        borderRadius: 8,
    },
});
