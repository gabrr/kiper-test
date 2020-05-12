import * as Constants from '../constants'

const getAllAPSSuccess = data => ({
    type: Constants.GET_ALL_APS,
    apartments: [{
        id: "122",
        number: 312,
        block: "E",
        owner: {
            id: "fghj",
            name: "Jhon",
            birthdate: "21/12/1989",
            phone: '11989208685',
            cpf: '07124555353',
            email: "example@example.com"
        },
        living: [{
            id: "34567",
            name: "lara croft",
            birthdate: "21/23/4445",
            phone: '123456789',
            cpf: '1123458901',
            email: "example@examplo.com"
        }, ],
        _createdAt: "12/21/1234",
        _updatedAt: "13/12/1234"
    }]
})

export const getAllApartments = (params = {}) => {
    return (dispatch, getState) => {
        return dispatch(getAllAPSSuccess())
    }
}