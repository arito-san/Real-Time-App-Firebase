import React from 'react';
import { View, StatusBar } from 'react-native';
import ChatCard from '@components/chatCard';

export default () => {
    return (
        <View>
            <StatusBar hidden={true} />
            <ChatCard />
        </View>
    )
}