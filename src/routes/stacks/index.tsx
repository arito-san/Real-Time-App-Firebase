import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./type";

import Login from "@views/login";
import RecoveryPassword from "@views/recoveryPassword";
import Register from "@views/register";
import Home from '../tab/index';
const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default () => {
    return (
        <Navigator initialRouteName="Home" screenOptions={{
            headerShadowVisible: false
        }}>
            <Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Screen name="RecoveryPassword" component={RecoveryPassword} options={{ headerShown: false }} />
            <Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Screen name="Home" component={Home}
                options={{
                    headerShown: true,
                    title: 'booMessage',
                    headerStyle: {
                        backgroundColor: '#169CCC'
                    },
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontSize: 20, color: '#fff' }

                }} />
        </Navigator>
    );
}
