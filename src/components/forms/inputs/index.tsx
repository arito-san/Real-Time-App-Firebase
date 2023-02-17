import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const InputEmail = ({ onChangeText, value }: any) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{ flexDirection: 'row', maxWidth: '80%' }}>
                <Icon name="account-outline" size={24} color='#fff' style={{ alignSelf: 'center', marginLeft: 8 }} />
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="E-mail"
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    maxLength={25}
                />
            </View>
        </KeyboardAvoidingView>

    )
}
const InputName = ({ onChangeText, value }: any) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{ flexDirection: 'row', maxWidth: '80%' }}>
                <Icon name="pencil-outline" size={20} color='#fff' style={{ alignSelf: 'center', marginLeft: 8 }} />
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Nome ou apelido"
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    cursorColor={'#fff'}
                    maxLength={10}
                />

            </View>
        </KeyboardAvoidingView>
    )
}
const InputPassword = ({ onChangeText, value }: any) => {
    const [secureEntry, setSecureEntry] = useState(true)
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{ flexDirection: 'row', maxWidth: '80%' }}>
                <Icon name="lock-outline" size={20} color='#fff' style={{ alignSelf: 'center', marginLeft: 8 }} />
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Senha"
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    secureTextEntry={secureEntry}
                    maxLength={12}
                />
            </View>
            <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)} style={{ alignItems: 'center', justifyContent: 'center' }}>
                {
                    secureEntry == false
                        ?
                        <Icon name="eye-off-outline" size={20} color='#fff' style={{ marginRight: 10 }} />
                        :
                        <Icon name="eye-outline" size={20} color='#fff' style={{ marginRight: 10 }} />
                }
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
const InputConfirmPassword = ({ onChangeText, value }: any) => {
    const [secureEntry, setSecureEntry] = useState(true)
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={{ flexDirection: 'row', maxWidth: '80%' }}>
                <Icon name="lock-outline" size={20} color='#fff' style={{ alignSelf: 'center', marginLeft: 8 }} />
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Confirmar senha"
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    secureTextEntry={secureEntry}
                    maxLength={12}
                />
            </View>
            <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)} style={{ alignItems: 'center', justifyContent: 'center' }}>
                {
                    secureEntry == false
                        ?
                        <Icon name="eye-off-outline" size={20} color='#fff' style={{ marginRight: 10 }} />
                        :
                        <Icon name="eye-outline" size={20} color='#fff' style={{ marginRight: 10 }} />
                }
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}


export { InputEmail, InputPassword, InputName, InputConfirmPassword }