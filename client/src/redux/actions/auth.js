import * as Constants from '../constants'

const signSuccess = data => ({
    type: Constants.SIGNIN_SUCCESS,
    user: {
        auth: true,
        name: "Gabriel",
        email: "g.webdevelop@gmail.com",
        token: "ndea7xyt7r5768q7t7a%ˆ&*rhjg"
    }
})

const signError = data => ({
    type: Constants.SIGNIN_ERROR,
    user: {
        auth: false
    }
})

export const signin = (params = {}) => {
    // const { email, pass } = params

    return (dispatch, getState) => {
        return dispatch(signSuccess())
    }
}

export const signup = (params = {}) => {
    const { email, pass } = params

    return (dispatch, getState) => {
        return email === 'g.webdevelop@gmail.com' && pass === '123abcde' ? (
            dispatch(signSuccess())
        ) : (dispatch(signError()))

    }
}