import { combineReducers } from 'redux';
import {Reducer} from './Reducer';
import {Cards} from './Cards';

export const rootReducer = combineReducers({main: Reducer,cards: Cards});