import React, { useContext, useState, useEffect } from 'react';
import { View, Modal, FlatList, TouchableOpacity, TextInput, Text } from 'react-native';
import CardContacts from '@components/cardContacts';
import styles from './styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { showSuccesMessage } from '@components/Message';
import firestore from '@react-native-firebase/firestore';
import { userContext } from '@hooks/index';
import { CardDinamicContacts } from '@components/cardContacts/index';

const LottieView = require("lottie-react-native");
const searchGhost = require('@assets/searchGhost.json');

export default ({ requestClose, visibleModal, data, navigation, onChangeText, value }: any) => {
    const { state } = useContext(userContext);
    const handleMessage = async (name: any, email: any, uid: any) => {
        await firestore()
            .collection('Users')
            .doc(`${state.uid}`)
            .collection('contacts')
            .doc(`${uid}`)
            .set({
                contacts: [
                    name,
                    email,
                    uid,
                    state.uid,
                ]
            })
            .then(() => {
                requestClose();
                showSuccesMessage('Contato adicionado');
            });
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibleModal}
            onRequestClose={requestClose}
            statusBarTranslucent={true}
        >
            <View style={styles.modalProcessing.container}>
                <View style={styles.modalProcessing.modalView}>
                    <View style={styles.modalProcessing.headModal}>
                        <View style={styles.modalProcessing.row}>
                            <View style={{ width: 288, borderRadius: 25, height: 40, borderWidth: 0.4, borderColor: '#169CCC', paddingHorizontal: 16 }}>
                                <TextInput
                                    maxLength={15}
                                    value={value}
                                    onChangeText={onChangeText}
                                    placeholder='Pesquisar'
                                    style={{ width: '100%' }} />
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity onPress={requestClose} style={styles.modalProcessing.exitIcon} >
                                <Icon name='close-circle' color={'red'} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {(value == '') &&
                        <View style={{ marginTop: 24, flex: 1, alignItems: 'center' }}>
                            <View >
                                <LottieView
                                    source={searchGhost}
                                    autoPlay={true}
                                    Loop={true}
                                    style={{ alignSelf: 'center', width: 230 }}
                                    resizeMode="container"
                                />
                            </View>
                            <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ color: '#5E5E5E', fontSize: 16, marginTop: 8, textAlign: 'center' }}>
                                    Você está procurando alguém?
                                </Text>
                            </View>
                        </View>
                    }

                    {(value !== '') &&
                        < View style={{ flex: 1 }}>
                            <FlatList
                                data={data}
                                renderItem={({ item }: { item: any | null }) =>
                                    <CardContacts onPress={() => handleMessage(item.name, item.email, item.uid)} name={item.name} lastMessage={item.lastMessage} date={item.date} />
                                }
                                keyExtractor={(item) => item.id}
                                scrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                // refreshControl={
                                //     <RefreshControl
                                //         refreshing={refreshing}
                                //         onRefresh={onRefresh}
                                //     />}
                                contentContainerStyle={{ paddingBottom: 16 }}
                            />
                        </View>}
                </View>
            </View>
        </Modal >
    )
}
export const CreateRoom = ({ visibleModal, requestClose, }: any) => {
    const { state } = useContext(userContext);
    const [contactData, setContactData] = useState([]);
    const [visibleList, setVisibleList] = useState(false);
    const [disableList, setDisableList] = useState(false);
    const [nameRoom, setNameRoom] = useState('');
    //data friend:
    const [nameFriend, setNameFriend] = useState('');
    const [emailFriend, setEmailFriend] = useState('');
    const [uidFriend, setUidFriend] = useState('');
    const destroyerModal = () => {
        setNameFriend('');
        setEmailFriend('')
        setUidFriend('')
        setNameRoom('');
        setVisibleList(false);
        setDisableList(false);
        requestClose();
    }
    const createRoom = async () => {
        //Coletando dados do friend
        const UIDFriend = [];
        UIDFriend.push(uidFriend);
        //O uid da sala vai ser a soma em ordem alfabetica sua e do seu friend
        const userId = state.uid;
        const chatUid = [];
        chatUid.push(UIDFriend);
        chatUid.push(userId);
        chatUid.sort();
        //fim
        await firestore().collection('Chat')
            .doc(`${chatUid.join("_")}`)
            .set({
                createdAt: (new Date()).getTime(),
                lastMessage: '',
                groupName: nameRoom,
                createdBy: state.uid,
                members: [
                    state.email,
                    emailFriend,
                ]
            })
            .then(() => {
                requestClose();
                showSuccesMessage('Sala criada!');
            });
    }
    const selectFriend = (name: any, email: any, uid: any) => {
        showSuccesMessage('Amigo selecionado');
        setNameFriend(name);
        setEmailFriend(email);
        setUidFriend(uid);
        setDisableList(true);
        setVisibleList(false);
    }
    const selectOtherFriend = (name: any, email: any, uid: any) => {
        setNameFriend(name);
        setEmailFriend(email);
        setUidFriend(uid);
        setDisableList(false);
        setVisibleList(true);
    }
    useEffect(() => {
        firestore()
            .collection('Users').doc(`${state.uid}`).collection('contacts')
            .where('contacts', 'array-contains', `${state.uid}`)
            .onSnapshot(documentSnapshot => {
                if (documentSnapshot != null) {
                    const cardsRoom: any | null = []
                    documentSnapshot.forEach((doc: any | null) => {
                        cardsRoom.push({ ...doc.data(), id: doc.id })
                    });
                    setContactData(cardsRoom);
                }
            })
    }, []);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visibleModal}
            onRequestClose={requestClose}
            statusBarTranslucent={true}>
            <View style={styles.unbind.container}>
                <View style={styles.unbind.modalView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
                        <View style={{ backgroundColor: '#121212', height: 32, width: 192, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Crie sua sala!</Text>
                        </View>
                        <TouchableOpacity onPress={() => destroyerModal()} style={{ backgroundColor: '#fff', marginTop: 16, alignItems: 'center' }} >
                            <Icon name='close-circle' color={'red'} size={28} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#5e5e5e', fontWeight: 'bold', marginHorizontal: 16, marginTop: 16 }}>Nome da sala:</Text>
                    <View style={{ marginHorizontal: 16 }}>
                        <View style={{ backgroundColor: '#fff', borderColor: '#169CCC', borderWidth: 0.4, height: 40, width: 160, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginTop: 8, paddingHorizontal: 8 }}>
                            <TextInput
                                value={nameRoom}
                                onChangeText={(text: string) => setNameRoom(text)}
                                style={{ width: '100%' }}
                            />
                        </View>
                    </View>
                    <Text style={{ color: '#5e5e5e', fontWeight: 'bold', marginHorizontal: 16, marginTop: 16 }}>Adicionar amigo:</Text>
                    <TouchableOpacity disabled={disableList} onPress={() => setVisibleList(!visibleList)} style={{ marginHorizontal: 16, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#169CCC', height: 32, width: 96, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                            <Icon name='plus-circle-outline' color={'#fff'} size={24} />
                        </View>
                    </TouchableOpacity>
                    {(disableList == true) &&
                        <TouchableOpacity onPress={() => selectOtherFriend('', '', '')} style={{ marginHorizontal: 16, backgroundColor: '#169CCC', height: 32, width: 96, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{nameFriend}</Text>
                        </TouchableOpacity>
                    }
                    {(visibleList == true) &&
                        < FlatList
                            data={contactData}
                            renderItem={({ item }: { item: any | null }) =>
                                <CardDinamicContacts disableList={disableList} onPress={() => selectFriend(item.contacts[0], item.contacts[1], item.contacts[2])} groupName={item.groupName} name={item.contacts[0]} lastMessage={item.lastMessage} date={item.createdAt} />
                            }
                            keyExtractor={(item) => item.id}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 16 }}
                            style={{ marginTop: 8, borderWidth: 0.4, borderColor: '#169CCC', marginHorizontal: 8, borderRadius: 20 }}
                        />
                    }
                    {
                        (nameFriend != '' && nameRoom != '')
                            ?
                            <TouchableOpacity onPress={() => createRoom()} style={{ alignSelf: 'center', backgroundColor: '#35EDE9', height: 32, width: 192, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Criar!</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ alignSelf: 'center', backgroundColor: '#5E5E5E', height: 32, width: 192, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Criar!</Text>
                            </View>
                    }
                    <View style={styles.unbind.headModal}>
                    </View>
                </View>
            </View>
        </Modal>
    )
}