import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SitesResolver } from './sites.resolver';
import { SitesService } from './sites.service';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([{ name: 'FFB_SERVICE', transport: Transport.TCP }]),
  ],
  providers: [SitesResolver, SitesService],
})
export class SitesModule {}
