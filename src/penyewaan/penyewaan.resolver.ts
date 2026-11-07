import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';

import { PenyewaanService } from './penyewaan.service';
import { PenyewaanType } from './penyewaan.model';

import { CreatePenyewaanInput } from './dto/create-penyewaan.input';
import { UpdatePenyewaanInput } from './dto/update-penyewaan.input';

@Resolver(() => PenyewaanType)
export class PenyewaanResolver {
  constructor(
    private readonly penyewaanService: PenyewaanService,
  ) {}

  // Menampilkan semua penyewaan
  @Query(() => [PenyewaanType], { name: 'penyewaan' })
  findAll() {
    return this.penyewaanService.findAll();
  }

  // Menampilkan penyewaan berdasarkan ID
  @Query(() => PenyewaanType, {
    name: 'penyewaanById',
    nullable: true,
  })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.penyewaanService.findOne(id);
  }

  // Menambahkan penyewaan
  @Mutation(() => PenyewaanType)
  createPenyewaan(
    @Args('input') input: CreatePenyewaanInput,
  ) {
    return this.penyewaanService.create(input);
  }

  // Mengubah penyewaan
  @Mutation(() => PenyewaanType)
  updatePenyewaan(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdatePenyewaanInput,
  ) {
    return this.penyewaanService.update(id, input);
  }

  // Menghapus penyewaan
  @Mutation(() => PenyewaanType)
  removePenyewaan(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.penyewaanService.remove(id);
  }
}