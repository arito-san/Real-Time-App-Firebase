import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';
const LottieView = require("lottie-react-native");
const loadGhost = require('@assets/activity.json');

export default ({ animating }: any) => {
    if (animating == true) {
        return (
            <View style={styles.load}>
                <LottieView
                    source={loadGhost}
                    autoPlay={true}
                    Loop={true}
                    style={{ alignSelf: 'center', width: 64 }}
                    resizeMode="container"
                />
            </View>
        )
    } else {
        return null
    }
}
export const LoadingModal = ({ animating }: any) => {
    if (animating == true) {
        return (
            <ActivityIndicator
                animating={animating}
                style={styles.loadModal}
                color={'#000D7B'}
                size={'large'}
            />
        )
    } else {
        return null
    }
}