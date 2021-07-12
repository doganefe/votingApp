import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://clever-bardeen-135d07.netlify.app/9002/graphql',
    cache: new InMemoryCache()
});

export default client;