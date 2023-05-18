import { Action, CounterState } from "../../@types/types"
import * as actionTypes from "../constants/counterConstants"
const initialState = {
    count: 0
}
export default function counterReducer(state: CounterState =initialState, action: Action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { count: state.count + 1 }

        case actionTypes.DECREMENT:

            return {
                count: state.count - 1
            }
        default : return state
    }
}