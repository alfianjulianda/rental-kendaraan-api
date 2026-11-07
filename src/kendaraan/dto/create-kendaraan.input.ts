import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateKendaraanInput {
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
}