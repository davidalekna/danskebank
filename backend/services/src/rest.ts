import * as express from "express";
import * as bodyParser from "body-parser";
import { proxy, createServer } from "aws-serverless-express";
import { eventContext } from "aws-serverless-express/middleware";

const app = express();

/**************** middleware config ****************/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(eventContext());

/**************** routes config ****************/

// NOTE: in the exercise description it didin't make it very clear on how to
// split a single input value into 2 values (val1, val2), so I just passed the
// same value into both keys.

app.get("/person/:input", (req, res) => {
  res.json({ val1: req.params.input, val2: req.params.input });
});

app.get("/facility/:val1", (req, res) => {
  res.json({ val3: req.params.val1, val4: req.params.val1 });
});

app.get("/exposure/:val2", (req, res) => {
  res.json({ val5: req.params.val2 });
});

/**************** service config ****************/

const service = createServer(app);

export function handler(
  event: AWSLambda.APIGatewayEvent,
  context: AWSLambda.Context
) {
  proxy(service, event, context);
}
