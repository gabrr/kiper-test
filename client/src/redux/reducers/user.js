import * as Constants from '../constants'

const INITIAL_STATE = {}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { user } = action
    switch (action.type) {
        case Constants.SIGNIN_SUCCESS:
            return user

        case Constants.SIGNIN_ERROR:
            return user

        default:
            return state
    }
}