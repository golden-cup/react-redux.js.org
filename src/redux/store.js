import { createStore, compose } from "redux";
import rootReducer from "./reducers";
//import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); // to make it works in Chrome extension

export default createStore(rootReducer, enhancers);


// import { createStore,compose } from "redux";
// import rootReducer from "./reducers";

// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     ); // to make it works in Chrome extension

// export default createStore(rootReducer,enhancers);
