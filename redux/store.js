import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {myReducer} from './reducer';

export const store = createStore(myReducer, applyMiddleware(thunk));
