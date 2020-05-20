import store from '../redux'
import * as myStorage from '../utils/localStorage'

export const isUserLogged = () => {
    if (myStorage.hasStorage('user')) {
        // myStorage.getStorage('user')
        const user = myStorage.getStorage('user')
        myStorage.setStorage('user', user)
        store.dispatch({ type: 'SIGNIN_SUCCESS', user })
    }
}