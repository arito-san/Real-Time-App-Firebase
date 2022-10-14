import React from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons//AntDesign'
export default () => {
    return (
        <View>
            <StatusBar hidden={true} />
            <Icon name="wechat" size={20} color="red" />
        </View>
    )
} 