import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    IAuthentication,
    ILoginData,
    ISignUpData,
} from '../../types/storeTypes';

const initialState: IAuthentication = {
    dialog: true,
    data: {
        loginData: { email: '', password: '' },
        signUpData: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
    },
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setDialog(state, action: PayloadAction<boolean>) {
            state.dialog = action.payload;
        },
        setLoginData(state, action: PayloadAction<ILoginData>) {
            state.data.loginData = action.payload;
        },
        setSignUpData(state, action: PayloadAction<ISignUpData>) {
            state.data.signUpData = action.payload;
        },
        resetData(state) {
            state.data = initialState.data;
        },
    },
});

export default authenticationSlice.reducer;
