import * as Constants from '../constants'

const INITIAL_STATE = []

export const apartmentReducer = (state = INITIAL_STATE, action) => {
    const { apartments, newApt, aptId } = action
    switch (action.type) {
        case Constants.GET_ALL_APS:
            return [...state, ...apartments]

        case Constants.GET_AN_APT:
            return [...state, apartments]

        case Constants.UPDATE_AN_APT:
            const newState = state.filter(({ _id }) => _id !== aptId)
            return [...newState, newApt]

        case Constants.DELETE_AN_APT:
            const remained = state.filter(({ _id }) => _id !== aptId)
            return [...remained]

        default:
            return state
    }
}