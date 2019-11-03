 
import thunk from "redux-thunk";
import logger from "redux-logger";
 import {rootreducer} from "./reducers";
import {applyMiddleware,createStore} from "redux"

 export default createStore(rootreducer,applyMiddleware(thunk, logger));