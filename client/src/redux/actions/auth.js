import * as Constants from '../constants'
import * as myStorage from '../../utils/localStorage'

const signSuccess = user => ({
    type: Constants.SIGNIN_SUCCESS,
    user
})

// const signError = data => ({
//     type: Constants.SIGNIN_ERROR,
//     user: {
//         auth: false
//     }
// })

export const signin = (user) => {
    myStorage.setStorage('user', { auth: true, ...user })
    return (dispatch, getState) => {
        return dispatch(signSuccess({ auth: true, ...user }))
    }
}

export const signup = (user) => {
    myStorage.setStorage('user', { auth: true, ...user })
    return (dispatch, getState) => {
        return (
            dispatch(signSuccess({ auth: true, ...user }))
        )
    }
}