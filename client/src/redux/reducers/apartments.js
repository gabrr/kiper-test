import * as Constants from '../constants'

const INITIAL_STATE = []

export const apartmentReducer = (state = INITIAL_STATE, action) => {
    const { apartments } = action
    switch (action.type) {
        case Constants.GET_ALL_APS:
            return [...state, ...apartments]
        default:
            return state
    }
}



// {
//     id: "",
//     number: null,
//     block: "",
//     owner: {
//         id: "",
//         name: "",
//         birthdate: "",
//         phone: null,
//         cpf: null,
//         email: ""
//     },
//     living: [{
//         id: "",
//         name: "",
//         birthdate: "",
//         phone: null,
//         cpf: null,
//         email: ""
//     }, ],
//     _createdAt: "",
//     _updatedAt: ""
// }