import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Testuser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}