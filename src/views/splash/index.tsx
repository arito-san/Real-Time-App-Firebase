import React, { useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { userContext } from '@hooks/index';
const LottieView = require("lottie-react-native");
const ghost = require("@assets/ghost.json")
export default ({ navigation }: any) => {
    // Set an initializing state whilst Firebase connects
    const [user, setUser]: any = useState();
    const { dispatch } = useContext(userContext)
    // Handle user state changes
    async function onAuthStateChanged(user: any) {
        setUser(user);
        if (!user) {
            navigation.navigate('Login')
        } else {
            const dataUser: any = await firestore().collection('Users').doc(`${user.uid}`).get();
            dispatch({ type: 'addAll', payload: { uid: user.uid, email: user.email, name: dataUser.data.name } })
            navigation.navigate('Home')
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#169CCC', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar hidden={true} />
            <LottieView
                source={ghost}
                autoPlay={true}
                Loop={true}
                style={{ width: 250 }}
                resizeMode="container"
            />
            <ActivityIndicator
                animating={true}
                color={'#fff'}
                size={'large'}
            />
        </View>
    )
}