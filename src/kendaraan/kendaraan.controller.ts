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

import { KendaraanService } from './kendaraan.service';
import { CreateKendaraanDto } from './dto/create-kendaraan.dto';
import { UpdateKendaraanDto } from './dto/update-kendaraan.dto';

@Controller('kendaraan')
export class KendaraanController {
  constructor(private readonly kendaraanService: KendaraanService) {}

  @Post()
  create(@Body() createKendaraanDto: CreateKendaraanDto) {
    return this.kendaraanService.create(createKendaraanDto);
  }

  @Get()
  findAll() {
    return this.kendaraanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.kendaraanService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKendaraanDto: UpdateKendaraanDto,
  ) {
    return this.kendaraanService.update(id, updateKendaraanDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.kendaraanService.remove(id);
  }
}