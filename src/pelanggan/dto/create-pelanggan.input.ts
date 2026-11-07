import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePelangganInput {
  @Field()
  nama!: string;

  @Field()
  email!: string;

  @Field()
  noTelepon!: string;

  @Field({ nullable: true })
  alamat?: string;
}