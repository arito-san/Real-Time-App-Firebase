import React, { useState, useContext, useEffect } from "react";
import styles from './styles';
import { View, Text, Image, StatusBar, BackHandler } from 'react-native';
import { InputEmail, InputPassword } from "@components/forms/inputs/index";
import { MainButton, MainButtonOff } from "@components/buttons";
import { userContext } from '../../hooks/index';
import Loading from "@components/loading/loading";
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';
import { showSuccesMessage, showErroMessage } from '@components/Message/index';
const img = require('../../assets/login.png');

export default ({ navigation }: any) => {
    const { dispatch, state } = useContext(userContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Set an initializing state whilst Firebase connects
    const [user, setUser] = useState();
    function onAuthStateChanged(user: any) {
        setUser(user);
    }
    const clearState = () => {
        setEmail('');
        setPassword('');
    }
    const authFirebase = async () => {
        setLoading(true)
        await auth()
            .signInWithEmailAndPassword(email.trim(), password.trim())
            .then(async (userCredential) => {
                let user = userCredential.user
                const dataUser: any = await firestore().collection('Users').doc(`${user.uid}`).get();
                showSuccesMessage('Tudo certo, você será redirecionado!')
                clearState();
                dispatch({ type: 'addAll', payload: { uid: user.uid, email: user.email, name: dataUser._data.name } })
                setLoading(false);
                navigation.navigate('Home')
            },
            )
            .catch(error => {
                setLoading(false)
                if (error.code === 'auth/email-already-in-use') {
                    showErroMessage('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    showErroMessage('That email address is invalid!');
                }
                if (error.code === 'auth/invalid-email') {
                    showErroMessage('That email address is invalid!');
                }
                console.error(error);
            });
    };
    const createAccount = () => {
        navigation.navigate('Register')
    };
    const fortgotPassword = () => {
        navigation.navigate('RecoveryPassword')
    };
    const handleBackButtonClick = () => {
        if (navigation.isFocused()) {
            BackHandler.exitApp()
            return true;
        }
        return false;
    };
    //chatFriends
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => handleBackButtonClick());
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => handleBackButtonClick());
        };
    }, []);
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.containerImg}>
                <Image source={img} resizeMode={'contain'} style={styles.img} />
            </View>
            <View style={styles.containerInput}>
                <InputEmail
                    value={email.trim()}
                    onChangeText={(text: string) => setEmail(text)} />
                <InputPassword
                    value={password.trim()}
                    onChangeText={(text: string) => setPassword(text)} />
                {
                    (
                        email == '' ||
                        password == '' ||
                        password.length <= 4 ||
                        email.length <= 4
                    )
                        ?
                        <MainButtonOff title={'Entrar'} />
                        :
                        <MainButton title={'Entrar'} onPress={() => authFirebase()} />
                }
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Não possui conta? <Text style={{ textDecorationLine: 'underline' }} onPress={() => createAccount()}>Registre-se</Text></Text>
                <Text onPress={() => fortgotPassword()} style={[styles.text, { textDecorationLine: 'underline' }]}>Esqueceu a senha?</Text>
            </View>
            <Loading animating={loading} />
        </View>
    )
}