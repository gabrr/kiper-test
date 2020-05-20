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

        if (user._id) {
            userExists(user._id)
                .then(res => {
                    if (res.data) {
                        store.dispatch({ type: 'SIGNIN_SUCCESS', user: { auth: true, ...res.data.user } })
                        return myStorage.setStorage('user', { auth: true, ...res.data.user })
                    }
                })
                .catch(err => console.log(err))

        }
        store.dispatch({ type: 'SIGNIN_ERROR', user: { auth: false } })
        myStorage.removeStorage('user')

    }
}

//     console.log({ data }, 'data')
//     if (data._id) {
//         
//         return console.log(myStorage.getStorage('user'), 'local user ok')
//     } else {

//         return console.log(myStorage.getStorage('user'), 'local user bad')
//     }
// })