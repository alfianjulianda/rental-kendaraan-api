
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePelangganDto } from './dto/create-pelanggan.dto';
import { UpdatePelangganDto } from './dto/update-pelanggan.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PelangganService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePelangganDto) {
    try {
      return await this.prisma.pelanggan.create({ data });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email sudah terdaftar');
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.pelanggan.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const pelanggan = await this.prisma.pelanggan.findUnique({
      where: { id },
    });

    if (!pelanggan) {
      throw new NotFoundException('Pelanggan tidak ditemukan');
    }

    return pelanggan;
  }

  async update(id: number, data: UpdatePelangganDto) {
    await this.findOne(id);

    return this.prisma.pelanggan.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.pelanggan.delete({
      where: { id },
    });
  }
}
