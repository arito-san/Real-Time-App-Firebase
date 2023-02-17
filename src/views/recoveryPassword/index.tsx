import React, { useState, useContext } from "react";
import styles from './styles';
import { View, Text, Image, StatusBar } from 'react-native';
import { InputEmail } from "@components/forms/inputs/index";
import { MainButton } from "@components/buttons";
import Loading from "@components/loading/loading";
const img = require('../../assets/recovery.png');
export default ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.containerImg}>
                <Image source={img} resizeMode={'contain'} style={styles.img} />
            </View>
            <View style={styles.containerInput}>
                <View style={styles.containerLimitText}>
                    <Text style={styles.text}>Insira o e-mail associado a sua conta e nós
                        enviaremos as instruções para redefinir a
                        sua senha.
                    </Text>
                </View>
                <InputEmail
                    value={email}
                    onChangeText={(text: string) => setEmail(text)} />
                <MainButton title={'Recuperar senha'} onPress={() => console.warn('ops, não fiz ainda')} />
            </View>
            <View style={styles.containerText}>
                <Text onPress={() => navigation.goBack()} style={[styles.text, { textDecorationLine: 'underline' }]}>Voltar para login</Text>
            </View>
            <Loading animating={loading} />
        </View>
    )
}