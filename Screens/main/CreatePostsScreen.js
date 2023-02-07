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
    Button,
    Image,
} from 'react-native';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

// import { Header } from '../../components/header';
// import { Login } from '../../Screens/auth/LoginScreen';

const initialData = {
    name: '',
    place: '',
};

export const CreatePostsScreen = () => {
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);
    const [data, setData] = useState(initialData);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [type, setType] = useState(CameraType.back);
    const [cameraRef, setCameraRef] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);

    const keyBoardHide = () => {
        setIsKeyboardShow(false);
        Keyboard.dismiss();
    };

    const takePhoto = async () => {
        const location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
        const photo = await cameraRef.takePictureAsync();
        console.log(' take a photo', photo);

        if (photo.uri) {
            setPhoto(photo.uri);
        }
    };

    function toggleCameraType() {
        setType(current =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.permissionContainer}>
                <Text style={{ textAlign: 'center' }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const sendPhotoEndData = () => {
        setIsKeyboardShow(false);
        Keyboard.dismiss();
        if (photo && location && data) {
            setIsKeyboardShow(false);
            setPhoto(null);
            setLocation(null);
            setData(initialData);
            navigation.navigate('Posts', { photo, location, data });
            console.log('create post');
        }
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
                        {!isKeyboardShow && (
                            <Camera
                                style={styles.photoLayout}
                                type={type}
                                ref={setCameraRef}
                            >
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
                                <TouchableOpacity
                                    style={styles.flipButton}
                                    onPress={toggleCameraType}
                                >
                                    <MaterialCommunityIcons
                                        name="camera-flip"
                                        size={14}
                                        color="#BDBDBD"
                                    />
                                </TouchableOpacity>
                            </Camera>
                        )}

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
                                    // keyboardType="default"
                                    value={data.name}
                                    onChangeText={value =>
                                        setData(prevState => ({
                                            ...prevState,
                                            name: value,
                                        }))
                                    }
                                />
                            </View>
                            <View style={{ marginTop: 32 }}>
                                <TextInput
                                    style={styles.input}
                                    onFocus={() => setIsKeyboardShow(true)}
                                    placeholder="Місцевість"
                                    // keyboardType="default"
                                    value={data.place}
                                    onChangeText={value =>
                                        setData(prevState => ({
                                            ...prevState,
                                            place: value,
                                        }))
                                    }
                                />
                            </View>
                            <View>
                                {/* //! ---------- Кнопка: Створити -------- */}
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btn}
                                    onPress={sendPhotoEndData}
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
    permissionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    flipButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 0,
        backgroundColor: '#FFFFFF',
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
