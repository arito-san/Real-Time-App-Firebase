import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Contacts from '@components/contactsCard/index';
export default () => {
    return (
        <View>
            <StatusBar hidden={true} />
            <Contacts />
        </View>
    )
}