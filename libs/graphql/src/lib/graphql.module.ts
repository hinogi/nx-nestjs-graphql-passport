import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { GraphQLResolver } from './graphql.resolver'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [GraphQLResolver],
  exports: [],
})
export class GraphqlModule {}
