import { takeEvery, call, put } from 'redux-saga/effects'
import { serverLogin } from '../api'
import { AUTH, logIn } from '../store/actions'

export function* authentificateSage(action) {
    const { email, password } = action.payload;
    const success = yield call(serverLogin, email, password);

    if (success) {
        yield put(logIn())
    }
}

export function* authSaga() {
    yield takeEvery(AUTH, authentificateSage)
}