import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateKendaraanInput {
  @Field({ nullable: true })
  merk?: string;

  @Field({ nullable: true })
  model?: string;

  @Field(() => Int, { nullable: true })
  tahun?: number;

  @Field({ nullable: true })
  platNomor?: string;

  @Field({ nullable: true })
  jenis?: string;

  @Field(() => Float, { nullable: true })
  hargaSewa?: number;

  @Field({ nullable: true })
  status?: string;
}