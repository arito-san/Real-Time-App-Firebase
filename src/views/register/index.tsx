import React from "react";
import styles from './styles';
import { View, Text, Image } from 'react-native';
import { InputEmail, InputPassword, InputConfirmPassword, InputCpf } from "@components/forms/inputs/index";
import { MainButton } from "@components/buttons";
const img = require('../../assets/register.png')
export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image source={img} resizeMode={'contain'} style={styles.img} />
            </View>
            <View style={styles.containerInput}>
                <InputEmail />
                <InputCpf />
                <InputPassword />
                <InputConfirmPassword />
                <MainButton />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Já possui conta? Entre aqui.</Text>
            </View>


        </View>
    )
}