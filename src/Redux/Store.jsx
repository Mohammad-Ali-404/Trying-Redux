import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) =>{
    const upcomingState = [action].reduce(rootReducer, store.getState())
    console.log(`Upcoming state : ${JSON.stringify(upcomingState)}`);
}

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;