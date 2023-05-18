import * as actionTypes from "../constants/counterConstants"
export function incrementCount(){
    return {
        type: actionTypes.INCREMENT
    }
} 
export function decrementCount(){
    return {
        type: actionTypes.DECREMENT
    }
} 