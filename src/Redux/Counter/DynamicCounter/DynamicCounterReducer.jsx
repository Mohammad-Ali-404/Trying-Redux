/* eslint-disable no-unused-vars */
import React from 'react';
import { DDECREMENT, DINCREMENT } from './DynamicActionTypes';
const initianState ={
    value: 0,
}
const DynamicCounterReducer = (state = initianState, action) => {
    switch (action.type) {
        case DINCREMENT:
            return{
                ...state,
                value: state.value + action.payload,
            }
        case DDECREMENT:
            return{
                ...state,
                value: state.value - action.payload,
            }
    
        default:
            return state;
    }
    
};

export default DynamicCounterReducer;