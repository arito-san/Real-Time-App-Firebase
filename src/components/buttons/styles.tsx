import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});

export default EStyleSheet.create({
    container: {
        borderRadius: '1.25rem',
        backgroundColor: '#35EDE9',
        width: '18rem',
        height: '2.625rem',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '0.9375rem',
        fontWeight: 'bold',
        color: '#fff',
    }


})