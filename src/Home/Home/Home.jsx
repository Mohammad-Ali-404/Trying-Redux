/* eslint-disable no-unused-vars */
import React from 'react';
import Counter from './Counter/Counter';
import CounterHook from '../../Hook/CounterHook';
import DynamicCounterHook from '../../Hook/DynamicCounterHook';
import VariableCounter from '../../Hook/VariableCounter';

const Home = () => {
    return (
        <div>
            <CounterHook id="10"/>
            <DynamicCounterHook/>
            <VariableCounter />
            <VariableCounter dynamic={true}/>
        </div>
    );
};

export default Home;