import { apartmentReducer } from './apartments'
import { userReducer } from './user'

const reducers = {
    apartments: apartmentReducer,
    user: userReducer
}

export default reducers