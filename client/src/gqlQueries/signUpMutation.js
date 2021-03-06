import gql from 'graphql-tag'

export const signUpMutation = gql `
    mutation ($input: UserInput) {
        createUser(input: $input) {
            _id,
            name,
            email
        }
    }
`