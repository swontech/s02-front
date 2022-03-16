import * as action from "../../action/standardAction"
import { takeLatest, delay, put } from "redux-saga/effects";

function* increaseCount() {
    yield delay(1000)
    yield put(action.decreaseCount())
}

export default function* standardSaga() {
    yield takeLatest(action.INCREASE_COUNT, increaseCount)
}