import bcrypt from 'bcrypt'
import User from '../mongooseSchemas/userSchema'

export const creatingUser = async(input) => {
    const { email, password } = input

    const user = await User.findOne({ email })

    try {
        if (user) throw Error('User already exists')

        return User.create({
            ...input,
            password: bcrypt.hashSync(password, 10)
        })

    } catch (error) {
        console.log(error.message)
    }

}