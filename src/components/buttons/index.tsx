import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const MainButton = () => {
    return (
        <TouchableOpacity style={styles.container}        >
            <Text style={styles.text}>
                Entrar
            </Text>
        </TouchableOpacity>
    )
}



export { MainButton }