import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});

export default EStyleSheet.create({
    container: {
        borderWidth: '0.0625rem',
        borderColor: '#fff',
        borderRadius: '1.25rem',
        maxWidth: '18rem',
        height: '2.625rem',
        marginBottom: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        color: '#fff',
        width: '80%'
    }


})