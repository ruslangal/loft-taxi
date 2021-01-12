import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { authMiddleware } from '../middlewares/auth'
import { getCardMiddleware } from '../middlewares/getCard'
import { saveCardMiddleware } from '../middlewares/saveCard'


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
    applyMiddleware(authMiddleware, getCardMiddleware, saveCardMiddleware)
);

store.subscribe(() => saveToLocalStorage(store.getState()));
