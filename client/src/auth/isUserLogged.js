import store from '../redux'
import * as myStorage from '../utils/localStorage'

export const isUserLogged = () => {
    if (myStorage.hasStorage('user')) {
        // myStorage.getStorage('user')
        const user = {
            auth: true,
            name: "Gabriel",
            email: "g.webdevelop@gmail.com",
            token: "ndea7xyt7r5768q7t7a%ˆ&*rhjg"
        }
        store.dispatch({ type: 'SIGNIN_SUCCESS', user })
        myStorage.setStorage('user', user)
    }
}