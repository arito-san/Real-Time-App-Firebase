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
        textAlign: 'center'
    },
    img: {
        height: '11rem',
        width: '14.375rem'
    },
    containerInput: { flex: 2, justifyContent: 'center' },
    containerText: { flex: 1 },
    containerImg: {
        flex: 1, justifyContent: 'flex-end',
        marginTop: '6rem'
    }

})