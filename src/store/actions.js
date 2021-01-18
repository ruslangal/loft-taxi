export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTH = 'AUTH'
export const SAVE_CARD = 'SAVE_CARD'
export const GET_CARD = 'GET_CARD'
export const SHOW_CARD_DATA = 'SHOW_CARD_DATA'
export const REGISTRATION = 'REGISTRATION'

export const logIn = () => ({ type: LOG_IN })
export const logOut = () => ({ type: LOG_OUT })

export const reg = (email, password, name, surname) => ({
    type: REGISTRATION,
    payload: {
        email,
        password,
        name,
        surname
    }
})

export const auth = (email, password) => ({
    type: AUTH,
    payload: {
        email,
        password
    }
})

export const showCardData = (data) => ({
    type: SHOW_CARD_DATA,
    payload: {
        cardNumber: data.cardNumber,
        cardName: data.cardName,
        cvc: data.cvc,
        expiryDate: data.expiryDate
    }
})

export const saveCard = (cardNumber, cardName, expiryDate, cvc) => ({
    type: SAVE_CARD,
    payload: {
        cardNumber,
        cardName,
        expiryDate,
        cvc,
        token: 'AUTH_TOKEN' // TODO real token
    }
})

export const getCard = () => ({
    type: GET_CARD,
    payload: {
        token: 'AUTH_TOKEN' // TODO real token
    }
})
