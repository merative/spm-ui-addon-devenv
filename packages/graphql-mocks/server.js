const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const open = require("open");
const { TypeDefs } = require("./typeDefs");
const { Resolvers } = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs: TypeDefs,
  resolvers: Resolvers,
});

const app = express();
app.use(
  cors({
    origin: "*",
  }),
);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);
app.listen(4000);
open("http://localhost:4000/graphql");
