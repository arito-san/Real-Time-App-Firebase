import React from "react";
import styles from './styles';
import { View, Text, Image } from 'react-native';
import { InputEmail, InputPassword } from "@components/forms/login/index";
import { MainButton } from "@components/buttons";
const img = require('../../assets/login.png')
export default () => {
    return (
        <View style={styles.container}>

            <View style={styles.containerImg}>
                <Image source={img} resizeMode={'contain'} style={styles.img} />
            </View>
            <View style={styles.containerInput}>
                <InputEmail />
                <InputPassword />
                <MainButton />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Não possui conta? Registre-se</Text>
                <Text style={styles.text}>Esqueceu a senha?</Text>
            </View>


        </View>
    )
}