import React, { createContext, useReducer } from "react";
import Route from '../routes/index';
import FlashMessage from 'react-native-flash-message';

export const userContext = createContext();

const initialState = {
    uid: '',
    email: '',
    name: '',   
    token: '',
    refresh_token: ''
};
const actions = {
    uid: '',
    email: '',
    name: '',
    token: '',
    refresh_token: ''
}
function reducer(state, action) {
    switch (action.type) {
        case 'buildNumber':
            return {
                buildNumber: action.payload
            };
        case 'addAll':
            return {
                ...state, ...action.payload
            };
        case 'reset':
            return {
                reset: initialState
            };
        default:
            return state
    }
}
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <userContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Route />
            <FlashMessage position={'top'} />
        </userContext.Provider>
    )
}