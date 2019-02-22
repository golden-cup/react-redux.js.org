import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);


// import { createStore,compose } from "redux";
// import rootReducer from "./reducers";

// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     ); // to make it works in Chrome extension

// export default createStore(rootReducer,enhancers);
