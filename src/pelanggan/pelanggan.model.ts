
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PelangganType {
  @Field(() => Int)
  id!: number;

  @Field()
  nama!: string;

  @Field()
  email!: string;

  @Field()
  noTelepon!: string;

  @Field({ nullable: true })
  alamat?: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
