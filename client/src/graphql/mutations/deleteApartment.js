import gql from 'graphql-tag'

export const deleteApartment = gql `
    mutation ($_id: String) {
        deleteApt(_id: $_id) {
            deletedCount
        }
    }
`