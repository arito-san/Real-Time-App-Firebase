import { userContext } from "@hooks/index";
import React, { useContext } from "react";
import { View, Text } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import styles from './styles';
export default ({ message }: any) => {
    const { state } = useContext(userContext);
    const isMyMessage = () => {
        return message.name === state.name;
    }
    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#35EAE865' : '#CFCFCF50',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                    maxWidth: '100%',
                    minWidth: '10%'
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.name}</Text>}
                <View style={styles.containerMessageTime}>
                    <View style={{ maxWidth: '70%' }}>
                        <Text style={styles.messages}>{message.message}</Text>
                    </View>
                    <Text style={styles.time}>{(moment(message.createdAt).fromNow())}</Text>
                </View>
            </View>
        </View >

    )
}