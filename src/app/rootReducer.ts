import {combineReducers}from "redux"
import counterReducer from "./reducers/counterReducer.ts"
const rootReducer= combineReducers({    
    counter: counterReducer
 })
 export default rootReducer;
 export type State = ReturnType <typeof rootReducer>
