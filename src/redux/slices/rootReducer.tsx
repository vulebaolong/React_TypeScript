import { combineReducers } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
    productSlice,
    userSlice
});

export default rootReducer;