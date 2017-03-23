import React from "react";
import {render} from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './container/App';
import { Provider } from 'react-redux';

const mathReducer = (state = {result: 1, lastValues: []}, action) => {
    
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUB":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};

const userReducer = (state = {name: 'Gaurav', city: 'Nagpur', lastValues: []}, action) => {
    
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SET_CITY":
            state = {
                ...state,
                city: action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
   // console.log("Logging Action", action);
    next(action);
}
const store = createStore(combineReducers({math: mathReducer, user: userReducer}), {}, applyMiddleware(myLogger, logger()));

store.subscribe(()  => {
    //console.log('store updated', store.getState());
});

render(
    <Provider store={store}>
    <App />
    </Provider>,
    window.document.getElementById('app'));