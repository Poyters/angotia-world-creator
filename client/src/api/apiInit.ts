import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { typeDefs } from './types/typeDefs';

const link = new HttpLink({
  uri: 'http://0.0.0.0:4000/graphiql',
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link,
  typeDefs
});