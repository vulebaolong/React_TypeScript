import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/rootReducer';

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store