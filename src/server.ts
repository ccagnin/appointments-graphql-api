import { ApolloServer } from 'apollo-server'
import "reflect-metadata"
import { buildSchema } from 'type-graphql'
import { AppointmentsResolver } from './appointments/resolvers/appointments-resolver'
import path from 'node:path'
import { Container } from 'typedi'
import { createConnection, useContainer as useContainerTypeOrm } from 'typeorm'
import { CustomerResolver } from './customer/resolvers/customer-resolver'

useContainerTypeOrm(Container);
createConnection({
  type: "sqlite",
  database: "database.sqlite",
  entities: [__dirname + "/**/*-model.ts"],
  synchronize: true,
}).then(async () => {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver, CustomerResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    container: Container
  })

  const server = new ApolloServer({
    schema,
  });
  const { url } = await server.listen(4000)

  console.log(`Server is running, GraphQL Playground available at ${url}`)
}).catch(err => {
  console.error("Error starting server: ", err);
});
