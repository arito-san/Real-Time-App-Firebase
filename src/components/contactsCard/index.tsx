import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './styles';
export default () => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.containerLeft}>
                <View style={styles.img}>
                    <View style={styles.containerImg}>
                        <Icon name='user' color={'#fff'} size={25} />
                    </View>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textName}>Maria</Text>
                    <Text>Olá! Estou usando o BooChat.</Text>
                </View>
            </View>
        </TouchableOpacity >

    )
}