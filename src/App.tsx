import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./app/rootReducer";
import { incrementCount,decrementCount } from "./app/actionsCreators/actionCreators";
export default function (){
    const count = useSelector ((state : State)=> state.counter.count)
    const dispatch = useDispatch()
    function increment(){
        dispatch(incrementCount())
    }
    function decrement(){
        dispatch(decrementCount())
    }
    return(
        <> 
            <button onClick={decrement} >-</button>
            <span>{count}</span>
            <button onClick={increment} >+</button>
        </>
    )
}


