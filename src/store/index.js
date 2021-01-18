import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import createSagaMiddleware from 'redux-saga'
import { authSaga } from '../sagas/authSaga'
import { regSaga } from '../sagas/regSaga'
import { saveCardSaga, getCardSaga } from '../sagas/cardSaga'

const sagaAuthMiddleware = createSagaMiddleware()
const sagaRegMiddleware = createSagaMiddleware()
const sagaGetCardMiddleware = createSagaMiddleware()
const sagaSaveCardMiddleware = createSagaMiddleware()

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('loftTaxiUserData', serialisedState);
    } catch (e) {}
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('loftTaxiUserData');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        return undefined;
    }
}

export const store = createStore(
    rootReducer,
    loadFromLocalStorage(),
    applyMiddleware(sagaAuthMiddleware, sagaRegMiddleware, sagaGetCardMiddleware, sagaSaveCardMiddleware)
);

sagaAuthMiddleware.run(authSaga);
sagaRegMiddleware.run(regSaga);
sagaGetCardMiddleware.run(saveCardSaga);
sagaSaveCardMiddleware.run(getCardSaga);

store.subscribe(() => saveToLocalStorage(store.getState()));
