import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

// import { Header } from '../../components/header';
// import { Login } from '../../Screens/auth/LoginScreen';

export const CreatePostsScreen = () => {
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);

    const keyBoardHide = () => {
        Keyboard.dismiss();
        setIsKeyboardShow(false);
    };

    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        setPhoto(photo.uri);
        console.log(' take a photo', photo);
    };

    return (
        <TouchableWithoutFeedback onPress={keyBoardHide}>
            <View style={styles.container}>
                {/* <Header title="Створити публікцію" /> */}
                <ScrollView style={styles.main}>
                    <View
                        style={{
                            ...styles.form,
                            marginBottom: isKeyboardShow ? 40 : 0,
                        }}
                    >
                        <Camera style={styles.photoLayout} ref={setCamera}>
                            {photo && (
                                <View style={styles.takePhotoContainer}>
                                    <Image
                                        source={{ uri: photo }}
                                        style={{
                                            height: 200,
                                            width: 200,
                                        }}
                                    />
                                </View>
                            )}
                            <TouchableOpacity
                                style={styles.photoLayoutBtn}
                                activeOpacity={0.85}
                                onPress={takePhoto}
                            >
                                <FontAwesome
                                    name="camera"
                                    size={24}
                                    // color="wight"
                                    style={styles.photoIconBtn}
                                />
                            </TouchableOpacity>
                        </Camera>

                        <Text style={styles.downloadText}>
                            Завантажити фото
                        </Text>

                        <KeyboardAvoidingView
                            behavior={
                                Platform.OS == 'ios' ? 'margin' : 'height'
                            }
                        >
                            <View style={{ marginTop: 48 }}>
                                <TextInput
                                    style={styles.input}
                                    onFocus={() => setIsKeyboardShow(true)}
                                    placeholder="Назва"
                                    keyboardType="default"
                                />
                            </View>
                            <View style={{ marginTop: 32 }}>
                                <TextInput
                                    style={styles.input}
                                    onFocus={() => setIsKeyboardShow(true)}
                                    placeholder="Місцевість"
                                    keyboardType="default"
                                />
                            </View>
                            <View>
                                {/* //! ---------- Кнопка: Створити -------- */}
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btn}
                                    onPress={() => {
                                        console.log('create post');
                                    }}
                                >
                                    <Text style={styles.btnTitle}>
                                        Створити публікцію
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 30,
        paddingHorizontal: 16,
    },
    photoLayout: {
        height: 240,
        backgroundColor: '#F6F6F6',

        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    takePhotoContainer: {
        position: 'absolute',
        // flex: 1,
        top: 5,
        left: 5,
        borderColor: '#fffC19',
        borderWidth: 1,
        borderRadius: 8,
    },
    photoLayoutBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: '#BDBDBD',
        borderWidth: 1,

        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoIconBtn: {
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    downloadText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        marginTop: 8,
        color: '#BDBDBD',
    },
    form: {},
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    },
    btn: {
        height: 51,
        marginTop: 27,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
