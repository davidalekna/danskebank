import * as cdk from "@aws-cdk/core";
import * as apiGateway from "@aws-cdk/aws-apigateway";
import { GraphQLServer } from "./graphql-server";
import { RestServer } from "./rest-server";

export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const restBackend = new RestServer(this, "DanskeRestServer");
    const restBackendGateway = new apiGateway.LambdaRestApi(
      this,
      "DanskeRest",
      {
        handler: restBackend.handler,
      }
    );

    const graphqlBackend = new GraphQLServer(this, "DanskeGraphQLServer", {
      REST_API: restBackendGateway.url,
    });
    new apiGateway.LambdaRestApi(this, "DanskeGraphQL", {
      handler: graphqlBackend.handler,
    });
  }
}
