import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) =>{
    const upcomingState = [action].reduce(rootReducer, store.getState())
    console.log(`Upcoming state : ${JSON.stringify(upcomingState)}`);

    // pass action 
    return next(action)
}
export default myLogger