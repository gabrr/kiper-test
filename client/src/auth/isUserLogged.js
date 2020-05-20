import store from '../redux'
import * as myStorage from '../utils/localStorage'
import { client } from '../apolloClient'
import gql from 'graphql-tag'

const userExists = id => {
    return client.query({
        query: gql `
            query ($_id: String) {
                user(_id: $_id) {
                    _id,
                    name,
                    email
                }
            }
        `,
        variables: { _id: id }
    })
}


export const isUserLogged = () => {
    if (myStorage.hasStorage('user')) {

        const user = myStorage.getStorage('user')
        userExists(user._id)
            .then(({ data }) => store.dispatch({ type: 'SIGNIN_SUCCESS', user: { auth: true, ...data.user } }))
            .then(({ data }) => myStorage.setStorage('user', { auth: true, ...data.user }))
            .catch(err => console.log(err))

    }
}