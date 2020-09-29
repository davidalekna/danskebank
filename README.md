HELLO 👋🏻

To start an application please cd into the client folder and run `yarn or npm install`. When dependencies have finished installing please run `yarn start` or `npm run start` and it should run the client application. Backend code is hosted so no need to run the server, endpoint will be consumed by the client over the env variables.

SOME NOTES 📝

I did not fully understand how I was supposed to split the user input into val1 and val2 so I just passed the initial value to both of them.

BACKEND 🖲

Backend is written in Node TypeScript and hosted on AWS lambdas called `graphql` and `rest` using AWS CDK (Cloud Development Kit). In order to deploy your own cloud infrastructure, you'd need an AWS account, local aws config file, and aws-cdk installed globally as NPM module. It's not necessary though as it currently sits on the cloud and exposes endpoints to be consumed by our front-end, however, if you'd like to do that and you have an account and cdk setup ready, cd into the backend and run yarn deploy. Also don't forget to update `.env.development` in your client folder with your own graphql endpoint once the deployment is successful.

[link to GraphQL Server file](https://github.com/davidalekna/danskebank/blob/master/backend/services/src/graphql.ts)

[link to Rest Service file](https://github.com/davidalekna/danskebank/blob/master/backend/services/src/rest.ts)

FORNTEND 💻

Written in TypeScript React, main focus is the dark blue box with an input field and a submit button which on a submittion should have an overlay with 2 values added.
