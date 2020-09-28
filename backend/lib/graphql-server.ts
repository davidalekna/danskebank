import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

interface GraphQLServerProps {
  REST_API: string;
}
export class GraphQLServer extends cdk.Construct {
  public readonly handler: lambda.Function;

  constructor(scope: cdk.Construct, id: string, props: GraphQLServerProps) {
    super(scope, id);

    this.handler = new lambda.Function(this, "GraphQLHandler", {
      code: lambda.Code.fromAsset("services"),
      handler: "src/graphql.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      timeout: cdk.Duration.seconds(5),
      environment: {
        REST_API: props.REST_API,
      },
    });
  }
}
