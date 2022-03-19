import { increament, decreament } from "../../reducers/standardReducer"
import { takeLatest, delay, put } from "redux-saga/effects";

function* increaseCount() {
    yield delay(1000)
    yield put(decreament())
}

export default function* standardSaga() {
    yield takeLatest(increament.type, increaseCount)
}