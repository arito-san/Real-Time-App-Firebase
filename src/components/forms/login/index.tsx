import React from "react";
import { View, TextInput } from 'react-native';
import styles from "./styles";

const InputEmail = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="E-mail"
                placeholderTextColor={'#fff'}
                style={styles.input}
            />
        </View>

    )
}
const InputPassword = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Senha"
                placeholderTextColor={'#fff'}
                style={styles.input}
                secureTextEntry={true}
            />
        </View>
    )
}


export { InputEmail, InputPassword }