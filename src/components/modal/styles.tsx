import { Dimensions } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

let { width } = Dimensions.get('window');

EStyleSheet.build({
    $rem: width <= 320 ? 14 : 16
});
export default EStyleSheet.create({
    modalProcessing: {
        container: {
            flex: 1,
            backgroundColor: '#00000070',
            justifyContent: 'flex-end'
        },
        modalView: {
            height: '41.25rem',
            width: '100%',
            backgroundColor: "white",
            borderTopLeftRadius: '1.56rem',
            borderTopRightRadius: '1.56rem',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowOpacity: '0.015625rem',
            shadowRadius: '0.25rem',
            elevation: '0.5rem'
        },
        headModal: {
            flexDirection: 'row',
            paddingVertical: '2rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            justifyContent: 'space-between'
        },
        row: {
            flexDirection: 'row'
        },
        exitIcon: {
            borderRadius: '0.75rem',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    unbind: {
        container: {
            flex: 1,
            backgroundColor: '#00000070',
            alignItems: 'center',
            justifyContent: 'center'
        },
        modalView: {
            maxHeight: '25rem',
            width: '21rem',
            backgroundColor: "white",
            borderRadius: '1.56rem',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowOpacity: '0.015625rem',
            shadowRadius: '0.25rem',
            elevation: '0.5rem'
        },
        headModal: {
            marginTop: '1.375rem',
            marginHorizontal: '1rem',
            width: '100%',
        },

    },
})