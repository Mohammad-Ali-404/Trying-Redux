/* eslint-disable no-unused-vars */
import React from 'react';
import Counter from './Counter/Counter';
import CounterHook from '../../Hook/CounterHook';

const Home = () => {
    return (
        <div>
            <CounterHook id="10"/>
            {/* <Counter id="20"/> */}
        </div>
    );
};

export default Home;