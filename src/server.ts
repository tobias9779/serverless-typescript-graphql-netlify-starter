import { ApolloServer, gql } from "apollo-server";
import { ApolloServer as ApolloServerLambda } from "apollo-server-lambda";

import typeDefs from "./schema";
import resolvers from "./resolvers";

function createLambdaServer() {
  return new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

function createLocalServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

export { createLambdaServer, createLocalServer };
