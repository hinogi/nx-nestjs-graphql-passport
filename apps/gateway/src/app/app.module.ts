import { Module } from '@nestjs/common'
import { CoreModule } from '@hinogi/core'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphqlModule } from '@hinogi/graphql'

@Module({
  imports: [CoreModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
