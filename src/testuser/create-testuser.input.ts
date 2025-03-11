import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestUserInput {
  @Field()
  name: string;

  @Field()
  email: string;
}