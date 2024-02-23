import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) =>{
    
}

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;