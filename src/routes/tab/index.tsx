import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { propsTopTabs } from './types'

import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Conversations from "@views/home/conversations";
import Contacts from "@views/home/contacts";
import Menu from '@views/menu';
const { Screen, Navigator } = createMaterialTopTabNavigator<propsTopTabs>();
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
                    tabBarContentContainerStyle: { marginLeft: 8 }
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
            <Screen
                name='Menu'
                component={Menu}
                options={{
                    tabBarIcon: ({ color: string }) => <Icon2 name="account-cog-outline" size={20} color="#fff" />,
                    tabBarIconStyle: { position: 'absolute', right: 20, top: 5 },
                    title: 'menu',
                    tabBarContentContainerStyle: { marginRight: 8 }
                }}
            />
        </Navigator>
    )
}