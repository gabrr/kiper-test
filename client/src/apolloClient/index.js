import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'http://127.0.0.1:3100/graphql',
    cache: new InMemoryCache({
        addTypename: false
    })
});