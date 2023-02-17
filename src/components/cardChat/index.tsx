import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import 'moment/locale/pt-br';
import styles from './styles';

export default ({ onPress, lastMessage, date, groupName }: any) => {
    var corRandom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.containerLeft}>
                <View style={[styles.img, { backgroundColor: corRandom }]}>
                    <View style={styles.containerImg}>
                        <Icon name='user' color={'#fff'} size={25} />
                    </View>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textName}>{groupName}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail'>{lastMessage}</Text>
                </View>
            </View>
            <View >
                <Text>
                    {(moment(date).fromNow())}
                </Text>
            </View>
        </TouchableOpacity >

    )
}