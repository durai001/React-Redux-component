 
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import {rootreducer} from "./reducers";
import {applyMiddleware,createStore} from "redux"

// const loadState = (state) => {
 
//     try {
//      const serializedState = localStorage.getItem(state);
//      if (serializedState === null) {
//        return undefined;
//      }
//      return JSON.parse(serializedState);
//    } catch (err) {
//      return undefined;
//    }
//  };

//  const saveState = (state) => {
//    //   console.log("##$$$$$$$$$$$$$$$$$$$",JSON.stringify(state))
//    try {
//      const serializedState = JSON.stringify(state);
//      localStorage.setItem('state', serializedState);
//    } catch(e){
//        console.log(e)
//      // ignore write errors
//    }
//  };

//  const persistedState = loadState();
// const store = createStore(
//    rootreducer,
//   persistedState,
//   applyMiddleware(thunk, promise()),
// );
// store.subscribe(() => saveState(store.getState()))



 export default createStore(rootreducer,applyMiddleware(thunk, promise()));