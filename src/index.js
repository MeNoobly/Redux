import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

// const action = {type: "", payload: ""}
const defaultState = {
    cash: 0,
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state;
    }
}

const store = configureStore({reducer: reducer});

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);