import { combineReducers } from "redux";
import DynamicCounterReducer from "./Counter/DynamicCounter/DynamicCounterReducer";
import CounterReducer from "./Counter/CounterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    dynamicCounter : DynamicCounterReducer,
})

export default rootReducer;