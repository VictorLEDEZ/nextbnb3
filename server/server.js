const { ApolloServer, gql } = require('apollo-server-micro');
// file system API from Node.js
const fs = require('fs');

// We listen to the port 9000
const port = 9000;

// we are importing the typeDefs thanks to the schema file via fs. Always include the encoding
const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8' }));

// we import the resolvers
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
// Here we destructured the serverInfo object by {url}
server
  .listen({ port })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
