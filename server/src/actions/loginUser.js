import bcrypt from 'bcrypt'
import User from '../mongooseSchemas/userSchema'

export const loginUser = async({ email, password }) => {
    try {

        const user = await User.findOne({ email })

        if (!user) throw new Error('User doesn\'t exist')
        if (!bcrypt.compareSync(password, user.password)) throw new Error('Wrong password')

        return user

    } catch (error) {
        return { message: error.message }
    }
}

// 356iouytfghbj