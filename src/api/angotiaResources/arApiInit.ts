import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

console.log('REACT_APP_ANGOTIA_RESOURCES_URL', process.env.REACT_APP_ANGOTIA_RESOURCES_URL);
const link = new HttpLink({
  uri: process.env.REACT_APP_ANGOTIA_RESOURCES_URL,
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link
});