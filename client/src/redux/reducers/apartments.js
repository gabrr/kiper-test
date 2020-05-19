import * as Constants from '../constants'

const INITIAL_STATE = []

export const apartmentReducer = (state = INITIAL_STATE, action) => {
    const { apartments } = action
    switch (action.type) {
        case Constants.GET_ALL_APS:
            return [...apartments]
        default:
            return state
    }
}