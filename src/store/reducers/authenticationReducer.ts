import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthentication } from '../../types/storeTypes';

const initialState: IAuthentication = {
    dialog: false,
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setDialog(state, action: PayloadAction<boolean>) {
            state.dialog = action.payload;
        },
    },
});

export default authenticationSlice.reducer;
