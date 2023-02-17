import { Dimensions } from "react-native";
import { colors, fontFamily, dimensions } from '@styles/index';
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'center',
        minHeight: '3.31rem',
        width: '18.56rem',
        flexDirection: 'row',
        paddingHorizontal: '2rem',
        borderRadius: '1.56rem',
    },
    containerTxt: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontFamily: fontFamily.openSans.bold,
        fontSize: '1rem',
        color: '#fff'
    },
    btnIgnore: {
        flex: 1,
        justifyContent: 'center'
    },
    icon: {
        color: colors.light.colorWhite,
        marginRight: '1rem'
    }

})