/*import React from "react";
import {render} from "react-dom";

import { User } from './components/User';
import { Main } from './components/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Max"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));*/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
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
const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger, logger()));

store.subscribe(()  => {
    //console.log('store updated', store.getState());
});

store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
    type: 'SUB',
    payload: 5
});

store.dispatch({
    type: 'SET_NAME',
    payload: 'New Name'
});

store.dispatch({
    type: 'SET_CITY',
    payload: 'New CITY'
});
