
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { PelangganType } from '../pelanggan/pelanggan.model';
import { KendaraanType } from '../kendaraan/kendaraan.model';

@ObjectType()
export class PenyewaanType {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  pelangganId!: number;

  @Field(() => Int)
  kendaraanId!: number;

  @Field()
  tanggalMulai!: Date;

  @Field()
  tanggalSelesai!: Date;

  @Field(() => Float)
  totalBiaya!: number;

  @Field()
  status!: string;

  @Field(() => PelangganType)
  pelanggan!: PelangganType;

  @Field(() => KendaraanType)
  kendaraan!: KendaraanType;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
