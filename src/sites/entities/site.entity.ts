import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Site {
  @Field()
  name: string;

  @Field()
  production: string;

  @Field()
  color: string;

  @Field()
  legendFontColor: string;

  @Field()
  legendFontSize: string;
}
