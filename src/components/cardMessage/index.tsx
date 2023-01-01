import React from "react";
import { View, Text } from 'react-native';
import styles from './styles';
export default ({ id }: any) => {
    const isMyMessage = () => {
        return id === 0;
    }
    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#35EAE865' : '#CFCFCF50',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>Maria</Text>}
                <View style={styles.containerMessageTime}>
                    <Text style={styles.messages}>Olá</Text>
                    <Text style={styles.time}>17:05</Text>
                </View>
            </View>
        </View >

    )
}