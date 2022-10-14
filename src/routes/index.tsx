import React from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stacks/index';

export default () => {
    return (
        <NavigationContainer>
            <StatusBar hidden={false} />
            <Stack />
        </NavigationContainer>
    )
}