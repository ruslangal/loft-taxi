import { logIn } from '../store/actions'
import { serverLogin } from '../api'
import { AUTH } from '../store/actions'

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTH) {
        const { email, password } = action.payload;
        const success = await serverLogin(email, password);
        if (success) {
            store.dispatch(logIn())
        }
    } else {
        next(action)
    }
}