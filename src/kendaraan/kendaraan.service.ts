import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateKendaraanDto } from './dto/create-kendaraan.dto';
import { UpdateKendaraanDto } from './dto/update-kendaraan.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class KendaraanService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateKendaraanDto) {
    try {
      return await this.prisma.kendaraan.create({
        data,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Nomor plat kendaraan sudah terdaftar');
      }

      throw error;
    }
  }

  findAll() {
    return this.prisma.kendaraan.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const kendaraan = await this.prisma.kendaraan.findUnique({
      where: { id },
    });

    if (!kendaraan) {
      throw new NotFoundException('Kendaraan tidak ditemukan');
    }

    return kendaraan;
  }

  async update(id: number, data: UpdateKendaraanDto) {
    await this.findOne(id);

    try {
      return await this.prisma.kendaraan.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Nomor plat kendaraan sudah terdaftar');
      }

      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.kendaraan.delete({
      where: { id },
    });
  }
}