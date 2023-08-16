import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { ReducerFetch } from './Stocks/Reducer';


const rootreducer=combineReducers({stocksList: ReducerFetch});

const store=configureStore({
    reducer: rootreducer,
    middleware:[thunk]
});

export default store;