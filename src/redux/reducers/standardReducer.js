
import * as standardAction from '../action/standardAction';

const initialStates = {
    count: 0,
}

export default function standard(state = initialStates, action) {
    const { type } = action
    switch (type) {
        case standardAction.INCREASE_COUNT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case standardAction.DECREASE_COUNT: {
            return {
                ...state,
                count: state.count - 1,
            }
        }
        default: return state
    }
}