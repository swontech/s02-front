import { all, fork } from "redux-saga/effects"
import standardSaga from './action/standardSaga'

function* rootSaga() {
    yield all([fork(standardSaga)])
}

export default rootSaga