import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Header } from '../components/header';
import { User } from '../components/user';
import { Publication } from '../components/publications';

import photo1 from '../assets/images/post_1.png';
import photo2 from '../assets/images/post_2.png';

export const PostsScreen = ({}) => {
    return (
        <View style={styles.container}>
            {/* <Header title="Публікції" out={true} /> */}
            <ScrollView style={styles.main}>
                <User />
                <Publication
                    title={'Ліс'}
                    image={photo1}
                    comments={0}
                    location={'Ivano-Frankivsk Region, Ukraine'}
                />

                <Publication
                    title={'Чорне море'}
                    image={photo2}
                    comments={0}
                    location={'Odessa, Ukraine'}
                />

                {/* {posts.map(({ id, image, title, comments, location }) =>
					<Publication key={id} title={title}
						image={image}
						coments={comments}
						location={location} />)} */}
            </ScrollView>
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

    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // titleHeader: {
    //     fontWeight: '500',
    //     fontSize: 17,
    //     lineHeight: 1.29,
    //     textAlign: 'center',
    //     letterSpacing: -0.408,
    //     color: '#212121',
    // },
    // photoFrame: {
    //     width: 60,
    //     height: 60,
    //     backgroundColor: '#F6F6F6',
    //     marginTop: -60,
    //     borderRadius: 16,
    // },
    // textUsername: {
    //     fontWeight: 700,
    //     fontSize: 13,
    //     lineHeight: 15,
    //     display: 'flex',
    //     alignItems: 'center',
    // },
    // textEmail: {
    //     fontWeight: 400,
    //     fontSize: 11,
    //     lineHeight: 13,
    //     display: 'flex',
    //     alignItems: 'center',
    // },
});
