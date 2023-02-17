import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#169CCC',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: '0.75rem',
        marginBottom: '1.5rem',
    },
    img: {
        height: '11rem',
        width: '14.375rem'
    },
    containerInput: { justifyContent: 'center' },
    containerText: { marginTop: '2.5rem' },
    containerImg: { marginTop: '5rem', justifyContent: 'flex-end', alignitems: 'center' },
    containerLimitText: { width: '18rem' }

})