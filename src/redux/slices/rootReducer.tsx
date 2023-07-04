import { combineReducers } from '@reduxjs/toolkit';
import productSlice from './productSlice';

const rootReducer = combineReducers({
    productSlice
});

export default rootReducer;