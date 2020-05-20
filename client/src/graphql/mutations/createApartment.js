import gql from 'graphql-tag'

export const createApartment = gql `
    mutation ($input: CreateApartmentInput) {
        createApt(input: $input) {
            _id,
            block,
            number,
            owner {
                name,
                email,
                phone,
                cpf,
                birthdate,
                class
            },
            living {
                _id,
                name,
                email,
                phone,
                cpf,
                birthdate,
                class
            }            
        }
    }
`