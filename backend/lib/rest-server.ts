import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class RestServer extends cdk.Construct {
  public readonly handler: lambda.Function;

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    this.handler = new lambda.Function(this, "RestHandler", {
      code: lambda.Code.fromAsset("services"),
      handler: "src/rest.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      memorySize: 256,
    });
  }
}
