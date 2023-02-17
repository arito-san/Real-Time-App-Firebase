import React, { useState } from "react";
import styles from './styles';
import { View, Text, Image, StatusBar } from 'react-native';
import { InputEmail, InputPassword, InputConfirmPassword, InputName } from "@components/forms/inputs/index";
import { MainButton, MainButtonOff } from "@components/buttons";
import Loading from "@components/loading/loading";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { showSuccesMessage, showErroMessage } from '@components/Message/index';
const img = require('../../assets/register.png');

export default ({ navigation }: any) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const clearState = () => {
        setEmail('');
        setName('');
        setPassword('');
        setconfirmPassword('')
    }
    const createAccount = async () => {
        const userCollection = firestore().collection('Users');
        setLoading(true)
        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                let user = userCredential.user
                await userCollection
                    .doc(`${user.uid}`)
                    .set({
                        uid: user.uid,
                        email: email.trim(),
                        password: password.trim(),
                        name: name.toLowerCase()
                    })
                    .then(() => {
                        showSuccesMessage('Finalizando algumas configurações, você será redirecionado!'),
                            auth().signOut();
                        setTimeout(() => {
                            clearState();
                        }, 5000);
                    });
                setLoading(false);
                navigation.goBack();
            })
            .catch(error => {
                setLoading(false)
                if (error.code === 'auth/email-already-in-use') {
                    showErroMessage('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    showErroMessage('That email address is invalid!');
                }
                if (error.code === 'auth/weak-password') {
                    showErroMessage('The given password is invalid. [ Password should be at least 6 characters ]');
                }
                console.error(error);
            });
    }
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
                <InputName
                    value={name}
                    onChangeText={(text: string) => setName(text)} />
                <InputPassword
                    value={password.trim()}
                    onChangeText={(text: string) => setPassword(text)} />
                <InputConfirmPassword
                    value={confirmPassword.trim()}
                    onChangeText={(text: string) => setconfirmPassword(text)} />
                {
                    (
                        email == '' ||
                        email.length <= 4 ||
                        name == '' ||
                        name.length <= 2 ||
                        password == '' ||
                        password.length <= 4 ||
                        confirmPassword == '' ||
                        confirmPassword.length <= 4 ||
                        password !== confirmPassword
                    )
                        ?
                        <MainButtonOff title={'Entrar'} />
                        :
                        <MainButton title={'Criar conta'} onPress={() => createAccount()} />
                }
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Já possui conta? <Text onPress={() => navigation.goBack()} style={[styles.text, { textDecorationLine: 'underline' }]}>Entre aqui.</Text> </Text>
            </View>
            <Loading animating={loading} />
        </View>
    )
}
