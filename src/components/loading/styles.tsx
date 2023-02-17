import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});
export default EStyleSheet.create({
    load: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0007',
        height: '100%',
        width: '100%'
    },
    loadModal: {
        backgroundColor: '#0000',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    }
})