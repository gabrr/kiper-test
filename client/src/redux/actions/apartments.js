import * as Constants from '../constants'
import { client } from '../../apolloClient'
import { gql } from "apollo-boost";

const getAllAPSSuccess = result => ({
    type: Constants.GET_ALL_APS,
    apartments: [
        ...result.data.apartments
    ]
})

export const getAllApartments = (params = {}) => {
    return async(dispatch, getState) => {
        const result = await client
            .query({
                query: gql ` {
                    apartments {
                        _id,
                        number,
                        block,
                        owner {
                            name,
                            email,
                            phone,
                            cpf,
                            birthdate,
                            class
                        },
                        living{
                            _id,
                            name,
                            email,
                            phone,
                            cpf,
                            birthdate,
                            class
                        }
                    }
                }`
            })
        return dispatch(getAllAPSSuccess(result));
    }
}