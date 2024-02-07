import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthentication, ILoginData } from '../../types/storeTypes';

const initialState: IAuthentication = {
    dialog: false,
    data: {
        loginData: { email: '', password: '' },
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
        resetData(state) {
            state.data = initialState.data;
        },
    },
});

export default authenticationSlice.reducer;
