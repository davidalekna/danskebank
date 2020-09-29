import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export function createClient() {
  const cache = new InMemoryCache();

  const link = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  });

  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
}

export const client = createClient();
