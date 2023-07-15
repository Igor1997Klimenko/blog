"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var schema_1 = require("@graphql-tools/schema");
var typeDefinitions = /* GraphQL */ "\ntype Query {\n  users: [User!]!\n  user(id: ID!): User\n}\n \ntype Mutation {\n  createUser(name: String!): User!\n}\n \ntype User {\n  id: ID!\n  name: String!\n}\n";
var resolvers = {
    Query: {
        hello: function () { return 'Hello World!'; }
    }
};
exports.schema = (0, schema_1.makeExecutableSchema)({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
});
