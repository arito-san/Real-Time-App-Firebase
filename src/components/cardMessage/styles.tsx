import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});

export default EStyleSheet.create({
    container: {
        padding: '0.625rem',
    },
    containerMessageTime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messageBox: {
        backgroundColor: '#e5e5e5',
        borderRadius: 8,
        padding: '0.625rem'
    },
    time: {
        alignSelf: 'flex-end',
        color: 'gray'
    },
    messages: {

        color: 'black'
    },
    name: {
        color: '#169CCC',
        fontWeight: 'bold',
        marginBottom: 5,
    },

})