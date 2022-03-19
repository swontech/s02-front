import { combineReducers } from 'redux'
import standard from './reducers/standardReducer'
import groupRegist from './reducers/groupRegistReducer'

const reducer = combineReducers({
    standard,
    groupRegist,
})

export default reducer