import { Resolver, Float, Query } from '@nestjs/graphql'

@Resolver()
export class GraphQLResolver {
  @Query(() => Float)
  uptime(): number {
    return process.uptime()
  }
}
