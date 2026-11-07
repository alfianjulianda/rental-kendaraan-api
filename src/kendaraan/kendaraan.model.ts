import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class KendaraanType {
  @Field(() => Int)
  id!: number;

  @Field()
  merk!: string;

  @Field()
  model!: string;

  @Field(() => Int)
  tahun!: number;

  @Field()
  platNomor!: string;

  @Field()
  jenis!: string;

  @Field(() => Float)
  hargaSewa!: number;

  @Field()
  status!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}