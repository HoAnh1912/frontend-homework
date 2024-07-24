import loadingReducer from 'components/LoadingCustom/loadingSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import userReducer from "pages/Login/userSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    loading: loadingReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
