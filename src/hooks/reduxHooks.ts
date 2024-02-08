import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { authenticationSlice } from '../store/reducers/authenticationReducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDialog = () => {
    const dispatch = useAppDispatch();
    const { setDialog, resetData } = authenticationSlice.actions;

    const handleClose = () => {
        dispatch(setDialog(false));
        dispatch(resetData());
    };

    return { handleClose };
};
