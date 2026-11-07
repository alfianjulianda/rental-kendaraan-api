import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';

import { PelangganService } from './pelanggan.service';
import { PelangganType } from './pelanggan.model';

import { CreatePelangganInput } from './dto/create-pelanggan.input';
import { UpdatePelangganInput } from './dto/update-pelanggan.input';

@Resolver(() => PelangganType)
export class PelangganResolver {
  constructor(
    private readonly pelangganService: PelangganService,
  ) {}

  // Menampilkan semua pelanggan
  @Query(() => [PelangganType], { name: 'pelanggan' })
  findAll() {
    return this.pelangganService.findAll();
  }

  // Menampilkan pelanggan berdasarkan ID
  @Query(() => PelangganType, {
    name: 'pelangganById',
    nullable: true,
  })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.pelangganService.findOne(id);
  }

  // Menambahkan pelanggan
  @Mutation(() => PelangganType)
  createPelanggan(
    @Args('input') input: CreatePelangganInput,
  ) {
    return this.pelangganService.create(input);
  }

  // Mengubah data pelanggan
  @Mutation(() => PelangganType)
  updatePelanggan(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdatePelangganInput,
  ) {
    return this.pelangganService.update(id, input);
  }

  // Menghapus pelanggan
  @Mutation(() => PelangganType)
  removePelanggan(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.pelangganService.remove(id);
  }
}