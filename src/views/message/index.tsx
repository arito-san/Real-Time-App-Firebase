import React from "react";
import styles from './styles';
import { View, FlatList, StatusBar, ImageBackground } from 'react-native';
import CardMessage from "@components/cardMessage";
const imgBckgnd = require('../../assets/backgroundchat.png')
export default () => {
    const data: any = [
        {
            id: 0,
            name: 'Maria',
            message: 'Olá',
            createdAt: '11/0/1002'
        },
        {
            id: 1,
            name: 'Maria',
            message: 'Olá',
            createdAt: '11/0/1003'
        },
    ]
    return (
        <View style={styles.container}>
            <ImageBackground source={imgBckgnd} resizeMode='cover' style={{ flex: 1, width: '100%', height: '100%' }}>
                <StatusBar hidden={true} />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    inverted
                    renderItem={({ item }: { item: any }) => <CardMessage id={item.id} />}
                    data={data}
                    keyExtractor={(item) => item.id} />
            </ImageBackground>

        </View>
    )
}