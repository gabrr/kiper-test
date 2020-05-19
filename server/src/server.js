import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'
import path from 'path'
import dotenv from 'dotenv'
import { typeDefs } from './typeDefs/typeDefs'
import { resolvers } from './resolvers'


dotenv.config()


// Adding the native promise library to be used by Mongoose
mongoose.Promise = global.Promise

mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('connected')).catch(err => console.log(err))




const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

const options = {
    port: process.env.PORT || 3100,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

server.start(options, ({ port }) => console.log(`Server is running on localhost: ${port}`))