import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './styles';
export default ({ onPress, name }: any) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.containerLeft}>
                <View style={styles.img}>
                    <View style={styles.containerImg}>
                        <Icon name='user' color={'#fff'} size={25} />
                    </View>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textName}>{name}</Text>
                    <Text>Olá! Estou usando o BooMessage.</Text>
                </View>
            </View>
        </TouchableOpacity >

    )
}
export const CardStaticContacts = ({ name }: any) => {
    var corRandom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.containerLeft}>
                <View style={[styles.img, { backgroundColor: corRandom }]}>
                    <View style={styles.containerImg}>
                        <Icon name='user' color={'#fff'} size={25} />
                    </View>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textName}>{name}</Text>
                    <Text>Olá! Estou usando o BooMessage.</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}
export const CardDinamicContacts = ({ name, onPress, disableList }: any) => {
    var corRandom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return (
        <TouchableOpacity disabled={disableList} onPress={onPress} style={styles.container}>
            <View style={styles.containerLeft}>
                <View style={[styles.img, { backgroundColor: corRandom }]}>
                    <View style={styles.containerImg}>
                        <Icon name='user' color={'#fff'} size={25} />
                    </View>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textName}>{name}</Text>
                    <Text>Olá! Estou usando o BooMessage.</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}