import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { propsTopTabs } from './types'

import Icon from 'react-native-vector-icons/AntDesign'
import Conversations from "@views/home/conversations";
import Contacts from "@views/home/contacts";

const { Screen, Navigator } = createMaterialTopTabNavigator<propsTopTabs>();
//  <IconOutline name='user' size={20} style={styles.iconModalProfile} />
export default () => {
    return (
        <Navigator
            initialRouteName='Conversations'
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#169CCC'
                },
                tabBarIndicatorStyle: { backgroundColor: 'white' },
                tabBarLabelStyle: { fontWeight: 'bold' },

            }}
        >

            <Screen
                name='Conversations'

                component={Conversations}
                options={{
                    tabBarIcon: ({ color: string }) => <Icon name="wechat" size={20} color="#fff" />,
                    tabBarIconStyle: { position: 'absolute', right: 40, top: 5 },
                    title: 'Conversas',
                }}
            />
            <Screen
                name='Contacts'
                component={Contacts}
                options={{
                    tabBarIcon: ({ color: string }) => <Icon name="contacts" size={20} color="#fff" />,
                    tabBarIconStyle: { position: 'absolute', right: 35, top: 5 },
                    title: 'Contatos'
                }}
            />
        </Navigator>
    )
}