import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import { CardStaticContacts } from '@components/cardContacts/index';
import firestore from '@react-native-firebase/firestore';
import Modal from '@components/modal';
import Icon from "react-native-vector-icons/AntDesign";
import { userContext } from '@hooks/index';
export default () => {
    const { state } = useContext(userContext);
    const [visibleModal, setVisibleModal] = useState(false);
    const [data, setData] = useState([]);
    const [contactData, setContactData]: any = useState([]);
    const [text, setText] = useState('');
    var corRandom = '#' + Math.floor(Math.random() * 16777215).toString(16);

    useEffect(() => {
        firestore()
            .collection('Users').doc(`${state.uid}`).collection('contacts')
            .where('contacts', 'array-contains', `${state.uid}`)
            .onSnapshot(documentSnapshot => {
                if (documentSnapshot != null) {
                    const cardsRoom: any = []
                    documentSnapshot.forEach((doc) => {
                        cardsRoom.push({ ...doc.data(), id: doc.id })
                    });
                    setContactData(cardsRoom);
                }

            })
    }, []);
    useEffect(() => {
        if (text !== '') {
            firestore()
                .collection('Users')
                .orderBy("name", "asc")
                .limit(8)
                .where("name", ">=", `${text.toLocaleLowerCase()}`)
                .onSnapshot(querySnapshot => {
                    if (querySnapshot != null) {
                        const cardsRoom: any = []
                        querySnapshot.forEach((doc: any) => {
                            //Coletando dados do friend
                            cardsRoom.push({ ...doc.data(), id: doc.id })
                        });
                        setData(cardsRoom);
                    }
                })
        }
    }, [text]);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <Modal
                visibleModal={visibleModal}
                requestClose={() => setVisibleModal(false)}
                data={data}
                onChangeText={(text: string) => setText(text)}
                value={text}
            />
            <FlatList
                data={contactData}
                renderItem={
                    ({ item }: { item: any | null }) =>
                        <CardStaticContacts groupName={item.groupName} name={item.contacts[0]} lastMessage={item.lastMessage} date={item.createdAt} />
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
                <Icon name='addusergroup' size={24} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}