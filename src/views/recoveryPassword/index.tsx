import React from "react";
import styles from './styles';
import { View, Text, Image, StatusBar } from 'react-native';
import { InputEmail } from "@components/forms/inputs/index";
import { MainButton } from "@components/buttons";
const img = require('../../assets/recovery.png')
export default () => {
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
                <InputEmail />
                <MainButton />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Voltar para login</Text>
            </View>


        </View>
    )
}