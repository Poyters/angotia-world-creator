import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: process.env.REACT_APP_ANGOTIA_RESOURCES_URL
});
