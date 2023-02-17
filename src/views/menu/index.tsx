import React, { useContext, useEffect } from 'react';
import { userContext } from '@hooks/index';
import { View, Text, TouchableOpacity, StatusBar, BackHandler } from 'react-native';
import { CommonActions } from "@react-navigation/native";

import auth from '@react-native-firebase/auth';
const LottieView = require("lottie-react-native");
const adm = require('@assets/adm.json');
export default ({ navigation }: any) => {
    const { dispatch } = useContext(userContext);
    const exitUser = async () => {
        await auth().signOut();
        dispatch({ type: 'reset' });
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'Login' }
                ],
            })
        );

    }
    const handleBackButtonClick = () => {
        if (navigation.isFocused()) {
            navigation.goBack();
            return true;
        }
        return false;
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => handleBackButtonClick());
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => handleBackButtonClick());
        };
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', width: '100%', height: '100%' }}>
            <View>
                <StatusBar hidden={true} />
                <View style={{ marginTop: 48 }}>
                    <LottieView
                        source={adm}
                        autoPlay={true}
                        Loop={true}
                        style={{ width: 250, alignSelf: 'center' }}
                        resizeMode="container"
                    />
                </View>
                <View style={{ alignSelf: 'center', width: '60%' }}>
                    <View >
                        <Text style={{ color: '#5E5E5E', fontSize: 16, marginTop: 16 }}>
                            Ops! Essa seção ainda esta em desenvolvimento!
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#5E5E5E', fontSize: 16, marginVertical: 8 }}>
                            Você deseja fazer sair da sua conta e fechar o app?
                        </Text>
                        <TouchableOpacity onPress={() => exitUser()} style={{ alignSelf: 'center', height: 32, width: 128, backgroundColor: '#2B2B2B', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}