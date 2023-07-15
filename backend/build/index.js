"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var http_1 = require("http");
var schema_1 = require("./schema");
function main() {
    var yoga = (0, graphql_yoga_1.createYoga)({ schema: schema_1.schema });
    var server = (0, http_1.createServer)(yoga);
    server.listen(3000, function () {
        console.info('Server is running on http://localhost:3000/graphql');
    });
}
main();
