import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePelangganInput {
  @Field({ nullable: true })
  nama?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  noTelepon?: string;

  @Field({ nullable: true })
  alamat?: string;
}