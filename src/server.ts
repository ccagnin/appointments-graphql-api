import { ApolloServer } from 'apollo-server'
import "reflect-metadata"
import { buildSchema } from 'type-graphql'
import { AppointmentsResolver } from './appointments/resolvers/appointments-resolver'
import path from 'node:path'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema,
  });
  const { url } = await server.listen(4000)

  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
