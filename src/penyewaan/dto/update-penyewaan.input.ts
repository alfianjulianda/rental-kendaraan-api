import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePenyewaanInput {
  @Field(() => Int, { nullable: true })
  pelangganId?: number;

  @Field(() => Int, { nullable: true })
  kendaraanId?: number;

  @Field({ nullable: true })
  tanggalMulai?: string;

  @Field({ nullable: true })
  tanggalSelesai?: string;
}