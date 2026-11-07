import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { PelangganService } from './pelanggan.service';
import { CreatePelangganDto } from './dto/create-pelanggan.dto';
import { UpdatePelangganDto } from './dto/update-pelanggan.dto';

@Controller('pelanggan')
export class PelangganController {
  constructor(private readonly pelangganService: PelangganService) {}

  @Post()
  create(@Body() createPelangganDto: CreatePelangganDto) {
    return this.pelangganService.create(createPelangganDto);
  }

  @Get()
  findAll() {
    return this.pelangganService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pelangganService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePelangganDto: UpdatePelangganDto,
  ) {
    return this.pelangganService.update(id, updatePelangganDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pelangganService.remove(id);
  }
}