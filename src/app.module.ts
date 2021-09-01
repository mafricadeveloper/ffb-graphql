import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { SitesModule } from './sites/sites.module';


@Module({
  imports: [   
      GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        debug: true,
        playground: true,
    }), SitesModule,
  ],

})
export class AppModule {}
