import React, { useState, useEffect, useContext } from "react";
import styles from './styles';
import { View, FlatList, StatusBar, ImageBackground, TextInput, TouchableOpacity, Animated } from 'react-native';
import CardMessage from "@components/cardMessage";
import firestore from '@react-native-firebase/firestore';
import Icon from "react-native-vector-icons/FontAwesome";
import { userContext } from "@hooks/index";
const imgBckgnd = require('../../assets/backgroundchat.png');

export default ({ route }: any) => {
    const { state } = useContext(userContext)
    const dataMessages = firestore().collection(`Chat`).doc(`${route.params.id}`).collection('messages')
    const [message, setMessage]: any = useState('')
    const [newMessage, setnewMessage] = useState('');
    const [animation, SetAnimation]: any = useState(new Animated.Value(0))

    async function onSendPress() {
        var time = (new Date()).getTime()
        firestore()
            .collection('Chat')
            .doc(`${route.params.id}`)
            .update({
                lastDate: time,
                lastMessage: newMessage
            })
            .then(() => {
                console.log('User updated!');
            });
        {
            (newMessage !== '') &&
                await dataMessages.add({
                    name: state.name,
                    message: newMessage,
                    uid: state.uid,
                    createdAt: time
                })
        }
        setnewMessage('')
    }
    const colorFront = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    }
    useEffect(() => {
        if (animation !== 0) {
            colorFront();
        }
    }, [animation]);
    useEffect(() => {
        dataMessages.orderBy("createdAt", "desc").onSnapshot((query) => {
            if (query != null) {
                const listMessage: any = []
                query.forEach((doc) => {
                    listMessage.push({ ...doc.data(), id: doc.id })
                })
                setMessage(listMessage)
            }
        })
        const interval = setInterval(() => {
            dataMessages.orderBy("createdAt", "desc").onSnapshot((query) => {
                if (query != null) {
                    const listMessage: any = []
                    query.forEach((doc) => {
                        listMessage.push({ ...doc.data(), id: doc.id })
                    })
                    setMessage(listMessage)
                }
            })
        }, 10000)
        return () => clearInterval(interval)
    }, []);
    return (
        <View style={styles.container}>
            <ImageBackground source={imgBckgnd} resizeMode='cover' style={{ flex: 1, width: '100%', height: '100%' }}>
                <StatusBar hidden={true} />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    inverted
                    renderItem={({ item }: { item: any }) => <CardMessage message={item} />}
                    data={message}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                />
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 8 }}>
                    <View style={{ width: '75%', maxHeight: 128, marginLeft: 16, marginBottom: 16, borderWidth: 0.4, borderRadius: 25, borderColor: '#169CCC', paddingHorizontal: 16 }} >
                        <TextInput
                            multiline={true}
                            value={newMessage}
                            onChangeText={(text) => setnewMessage(text)}
                        />
                    </View>
                    <Animated.View style={{
                        height: 50, width: 50, borderRadius: 25, marginHorizontal: 16, marginBottom: 16,
                        backgroundColor: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["rgb(90,210,244)", "rgb(224,82,99)"]
                        }),
                    }} >
                        <TouchableOpacity onPress={() => onSendPress()} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name='paper-plane-o' size={22} color={'#fff'} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ImageBackground>

        </View>
    )
}