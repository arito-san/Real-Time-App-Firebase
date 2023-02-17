import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./type";

import Login from "@views/login";
import RecoveryPassword from "@views/recoveryPassword";
import Message from "@views/message/index";
import Register from "@views/register";
import Splash from "@views/splash/index";
import Home from '../tab/index';
import Icon from "react-native-vector-icons/AntDesign";
import { View } from "react-native";
const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default () => {
    return (
        <Navigator initialRouteName="Splash" screenOptions={{
            headerShadowVisible: false
        }}>
            <Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Screen name="RecoveryPassword" component={RecoveryPassword} options={{ headerShown: false }} />
            <Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Screen name="Message" component={Message}
                options={({ route }: any) => ({
                    title: route.params.name,
                    headerShown: true,
                    headerStyle: { backgroundColor: '#169CCC' },
                    headerTitleStyle: { fontSize: 12, fontWeight: 'bold' },
                    headerTintColor: '#fff',
                    headerLeft: () =>
                        <View style={{ height: 34, width: 34, borderRadius: 17, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                            <Icon name="user" color={'#fff'} size={20} />
                        </View>
                })}
            />
            <Screen name="Home" component={Home}
                options={{
                    headerShown: true,
                    title: 'booMessage',
                    headerStyle: {
                        backgroundColor: '#169CCC'
                    },
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontSize: 20, color: '#fff' },
                    headerBackVisible: false

                }} />
        </Navigator>
    );
}
