import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const MainButton = ({ title, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
const MainButtonOff = ({ title }: any) => {
    return (
        <TouchableOpacity disabled={true} style={[styles.container, { backgroundColor: '#5E5E5E' }]}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export { MainButton, MainButtonOff }