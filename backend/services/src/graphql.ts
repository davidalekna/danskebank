import * as express from "express";
import { proxy, createServer } from "aws-serverless-express";
import { ApolloServer, gql } from "apollo-server-express";
import { GraphQLResolverMap } from "apollo-graphql";
import axios from "axios";

const app = express();

/**************** schema and resolver ****************/

const typeDefs = gql`
  type Result {
    val3: Int
    val5: Int
  }

  type Query {
    getResult(number: Int!): Result
  }
`;

const resolvers: GraphQLResolverMap<ResolverContext> = {
  Query: {
    getResult: async (_, { number }, { restEndpoint: baseURL }) => {
      const api = axios.create({ baseURL });

      const personResponse = await api.get(`person/${number}`);
      const facilityResponse = await api.get(
        `facility/${personResponse?.data?.val1}`
      );
      const exposureResponse = await api.get(
        `exposure/${personResponse?.data?.val2}`
      );

      return {
        val3: facilityResponse?.data?.val3,
        val5: exposureResponse?.data?.val5,
      };
    },
  },
};

/**************** graphql config ****************/

export type ResolverContext = {
  restEndpoint: string;
};

const apolloApp = new ApolloServer({
  typeDefs: [typeDefs],
  resolvers,
  context: (): ResolverContext => {
    return {
      restEndpoint: process.env.REST_API ?? "",
    };
  },
});

apolloApp.applyMiddleware({
  app,
  path: "/graphql",
  cors: {
    origin: true,
    credentials: true,
    methods: "GET, POST",
  },
});

/**************** service config ****************/

const service = createServer(app);

export function handler(
  event: AWSLambda.APIGatewayEvent,
  context: AWSLambda.Context
) {
  proxy(service, event, context);
}
