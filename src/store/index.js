import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { authMiddleware } from '../middlewares/auth'
import { getCardMiddleware } from '../middlewares/getCard'
import { saveCardMiddleware } from '../middlewares/saveCard'

export const store = createStore(
    rootReducer,
    applyMiddleware(authMiddleware, getCardMiddleware, saveCardMiddleware)
);
