import User from '../mongooseSchemas/userSchema'
import Apartment from '../mongooseSchemas/aptSchema'

// user actions
import { creatingUser } from '../actions/creatingUser'
import { loginUser } from '../actions/loginUser'

// apartment actions
import { creatingApartment } from '../actions/creatingApartment'

export const resolvers = {
    Query: {
        apartment: async(_, { _id }) => await Apartment.findById({ _id }),
        apartments: async() => await Apartment.find(),

        // user queries
        users: async() => await User.find(),
        user: async(_, { _id }) => await User.findById({ _id }),
        login: async(_, { email, password }) => await loginUser({ email, password })

    },
    Mutation: {
        createApt: async(_, { input }) => await creatingApartment(input),
        deleteApt: async(_, { _id }) => await Apartment.deleteOne({ _id }),
        updateApt: async(_, { input }) => await Apartment.findByIdAndUpdate({ _id: input._id }, input, {
            new: true
        }),

        // user resolvers
        createUser: async(_, { input }) => await creatingUser(input)
    },
}