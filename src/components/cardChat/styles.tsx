import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});

export default EStyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingVertical: '1rem',
        flexDirection: 'row',
        paddingHorizontal: '1rem',
    },
    text: {

    },
    img: {
        borderRadius: '1.5rem',
        height: '3rem',
        width: '3rem',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textName: { fontWeight: 'bold', color: '#000', textTransform: 'capitalize' },
    containerText: { flexDirection: 'column', marginLeft: '1rem', maxWidth: '60%' },
    containerImg: { alignSelf: 'center' },
    containerLeft: { flexDirection: 'row' }

})