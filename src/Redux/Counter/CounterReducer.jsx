/* eslint-disable no-unused-vars */
import React from 'react';
import { INCREMENT, DECREMENT } from './ActionTypes';
const initianState ={
    value: 0,
}
const CounterReducer = (state = initianState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                value: state.value + 1,
            }
        case DECREMENT:
            return{
                ...state,
                value: state.value - 1,
            }
    
        default:
            return state;
    }
    
};

export default CounterReducer;