import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { authMiddleware } from '../middlewares/auth'

export const store = createStore(
    rootReducer,
    applyMiddleware(authMiddleware)
);