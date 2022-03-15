import { combineReducers } from 'redux'
import standard from './reducers/standardReducer'

const reducer = combineReducers({
    standard,
})

export default reducer