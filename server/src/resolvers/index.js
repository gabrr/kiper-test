import User from '../mongooseSchemas/userSchema'
import Apartment from '../mongooseSchemas/aptSchema'

export const resolvers = {
    Query: {
        apartment: async(_, { _id }) => await Apartment.findById({ _id }),
        apartments: async() => await Apartment.find(),

        users: () => User.find(),
        user: (_, { _id }) => User.findById({ _id }),
        login: (_, { email, password }) => User.findOne({ email, password })

    },
    Mutation: {
        createApt: async(_, { input }) => await Apartment.create(input),
        deleteApt: async(_, { _id }) => await Apartment.deleteOne({ _id }),
        updateApt: async(_, { _id, input }) => await Apartment.findByIdAndUpdate({ _id }, input),

        // user resolvers
        createUser: (_, { input }) => User.create(input)
    },
}