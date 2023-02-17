import React, { useContext, useEffect, useState } from 'react';
import { View, StatusBar, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import ChatCard from '@components/cardChat';
import firestore from '@react-native-firebase/firestore';
import { userContext } from '@hooks/index';
import { CreateRoom } from '@components/modal';
const LottieView = require("lottie-react-native");
const ghostBtn = require('@assets/ghostBtn.json');
export default ({ navigation }: any) => {
    const { dispatch, state } = useContext(userContext);
    const [data, setData]: any | undefined | null = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const dataChat = firestore().collection('Chat');
    var corRandom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const handleMessage = (name: any, id: any) => {
        navigation.navigate('Message', {
            name: name,
            id: id
        })
    }
    const handleBackButtonClick = () => {
        if (navigation.isFocused()) {
            BackHandler.exitApp()
            return true;
        }
        return false;
    };
    //chatFriends
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => handleBackButtonClick());
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => handleBackButtonClick());
        };
    }, []);
    useEffect(() => {
        dataChat
            .where('members', 'array-contains', `${state.email}`)
            .onSnapshot(documentSnapshot => {
                if (documentSnapshot != null) {
                    const cardsRoom: any = []
                    documentSnapshot.forEach((doc) => {
                        cardsRoom.push({ ...doc.data(), id: doc.id })
                    });
                    setData(cardsRoom);
                }
            })
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <CreateRoom
                visibleModal={visibleModal}
                requestClose={() => setVisibleModal(false)}
            />
            <FlatList
                data={data}
                renderItem={({ item }: { item: any | null }) =>
                    <ChatCard
                        onPress={() => handleMessage(state.email == item.members[0] ? item.members[1] : item.members[0], item.id)}
                        groupName={item.groupName}
                        name={item.name}
                        lastMessage={item.lastMessage}
                        date={item.lastDate} />
                }
                keyExtractor={(item) => item.id}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
            <TouchableOpacity
                onPress={() => setVisibleModal(true)}
                style={{
                    backgroundColor: `${corRandom}`,
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 32,
                    right: 32
                }} >
                <LottieView
                    source={ghostBtn}
                    autoPlay={true}
                    Loop={true}
                    style={{ alignSelf: 'center' }}
                    resizeMode="container"
                />
            </TouchableOpacity>
        </View>
    )
}