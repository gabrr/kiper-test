import gql from 'graphql-tag'

export const updateApartment = gql `
    mutation ($input: UpdateApartmentInput) {
        updateApt(input: $input) {
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