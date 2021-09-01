import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SitesService } from './sites.service';
import { Site } from './entities/site.entity';

@Resolver(() => Site)
export class SitesResolver {
  constructor(private readonly sitesService: SitesService) {}

  @Query(() => [Site], { name: 'sites' })
  async findAllSite(@Args('year') year: string, @Args('month') month: string) {
    return await this.sitesService.findAllSite(year, month);
  }
}
