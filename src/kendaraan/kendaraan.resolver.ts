import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';

import { KendaraanService } from './kendaraan.service';
import { KendaraanType } from './kendaraan.model';

import { CreateKendaraanInput } from './dto/create-kendaraan.input';
import { UpdateKendaraanInput } from './dto/update-kendaraan.input';

@Resolver(() => KendaraanType)
export class KendaraanResolver {
  constructor(
    private readonly kendaraanService: KendaraanService,
  ) {}

  // Menampilkan semua kendaraan
  @Query(() => [KendaraanType], { name: 'kendaraan' })
  findAll() {
    return this.kendaraanService.findAll();
  }

  // Menampilkan kendaraan berdasarkan ID
  @Query(() => KendaraanType, {
    name: 'kendaraanById',
    nullable: true,
  })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.kendaraanService.findOne(id);
  }

  // Menambahkan kendaraan
  @Mutation(() => KendaraanType)
  createKendaraan(
    @Args('input') input: CreateKendaraanInput,
  ) {
    return this.kendaraanService.create(input);
  }

  // Mengubah kendaraan
  @Mutation(() => KendaraanType)
  updateKendaraan(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateKendaraanInput,
  ) {
    return this.kendaraanService.update(id, input);
  }

  // Menghapus kendaraan
  @Mutation(() => KendaraanType)
  removeKendaraan(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.kendaraanService.remove(id);
  }
}