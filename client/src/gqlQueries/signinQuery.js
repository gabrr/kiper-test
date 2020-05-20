import gql from 'graphql-tag'

export const signinQuery = gql `
    query ($email: String, $password: String) {
        login(email: $email, password: $password) {
            id,
            name,
            email
        }
    }
`