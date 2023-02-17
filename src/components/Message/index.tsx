import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { showMessage } from 'react-native-flash-message'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const showSuccesMessage = (desc: string | unknown[] | object) => {
    const message: any = {
        message: "Ação realizada com sucesso",
        description: desc,
        backgroundColor: '#06C23B',
        icon: ({ style, ...props }: any) => (
            <Icon name={'check-bold'} color={'#fff'} size={20} style={{ marginRight: 16 }}{...props} />
        ),
    }
    showMessage(message);
};
export const showErroMessage = (desc: string | unknown[] | object) => {
    const message: any = {
        message: "Ops! Algo deu errado.",
        description: desc,
        backgroundColor: '#DA0000',
        icon: ({ style, ...props }: any) => (
            <Icon name={'close'} color={'#fff'} size={20} style={{ marginRight: 16 }}{...props} />
        ),
    }
    showMessage(message);
};