import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePenyewaanInput {
  @Field(() => Int)
  pelangganId!: number;

  @Field(() => Int)
  kendaraanId!: number;

  @Field()
  tanggalMulai!: string;

  @Field()
  tanggalSelesai!: string;
}