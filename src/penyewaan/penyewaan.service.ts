
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';
import { UpdatePenyewaanDto } from './dto/update-penyewaan.dto';

@Injectable()
export class PenyewaanService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePenyewaanDto) {
    const pelanggan = await this.prisma.pelanggan.findUnique({
      where: { id: data.pelangganId },
    });

    if (!pelanggan) {
      throw new NotFoundException('Pelanggan tidak ditemukan');
    }

    const kendaraan = await this.prisma.kendaraan.findUnique({
      where: { id: data.kendaraanId },
    });

    if (!kendaraan) {
      throw new NotFoundException('Kendaraan tidak ditemukan');
    }

    const mulai = new Date(data.tanggalMulai);
    const selesai = new Date(data.tanggalSelesai);

    if (
      isNaN(mulai.getTime()) ||
      isNaN(selesai.getTime()) ||
      selesai <= mulai
    ) {
      throw new BadRequestException(
        'Tanggal selesai harus setelah tanggal mulai',
      );
    }

    const bentrok = await this.prisma.penyewaan.findFirst({
      where: {
        kendaraanId: data.kendaraanId,
        status: { notIn: ['ditolak', 'dibatalkan', 'selesai'] },
        tanggalMulai: { lt: selesai },
        tanggalSelesai: { gt: mulai },
      },
    });

    if (bentrok) {
      throw new ConflictException(
        'Kendaraan sudah disewa pada tanggal tersebut',
      );
    }

    const jumlahHari = Math.ceil(
      (selesai.getTime() - mulai.getTime()) / (1000 * 60 * 60 * 24),
    );

    const totalBiaya = jumlahHari * Number(kendaraan.hargaSewa);

    return this.prisma.penyewaan.create({
      data: {
        pelangganId: data.pelangganId,
        kendaraanId: data.kendaraanId,
        tanggalMulai: mulai,
        tanggalSelesai: selesai,
        totalBiaya,
        status: 'menunggu',
      },
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }

  findAll() {
    return this.prisma.penyewaan.findMany({
      include: {
        pelanggan: true,
        kendaraan: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const penyewaan = await this.prisma.penyewaan.findUnique({
      where: { id },
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });

    if (!penyewaan) {
      throw new NotFoundException('Penyewaan tidak ditemukan');
    }

    return penyewaan;
  }

  async update(id: number, data: UpdatePenyewaanDto) {
    const lama = await this.findOne(id);

    const pelangganId = data.pelangganId ?? lama.pelangganId;
    const kendaraanId = data.kendaraanId ?? lama.kendaraanId;
    const mulai = data.tanggalMulai
      ? new Date(data.tanggalMulai)
      : lama.tanggalMulai;
    const selesai = data.tanggalSelesai
      ? new Date(data.tanggalSelesai)
      : lama.tanggalSelesai;

    if (
      isNaN(mulai.getTime()) ||
      isNaN(selesai.getTime()) ||
      selesai <= mulai
    ) {
      throw new BadRequestException(
        'Tanggal selesai harus setelah tanggal mulai',
      );
    }

    const pelanggan = await this.prisma.pelanggan.findUnique({
      where: { id: pelangganId },
    });

    if (!pelanggan) {
      throw new NotFoundException('Pelanggan tidak ditemukan');
    }

    const kendaraan = await this.prisma.kendaraan.findUnique({
      where: { id: kendaraanId },
    });

    if (!kendaraan) {
      throw new NotFoundException('Kendaraan tidak ditemukan');
    }

    const bentrok = await this.prisma.penyewaan.findFirst({
      where: {
        id: { not: id },
        kendaraanId,
        status: { notIn: ['ditolak', 'dibatalkan', 'selesai'] },
        tanggalMulai: { lt: selesai },
        tanggalSelesai: { gt: mulai },
      },
    });

    if (bentrok) {
      throw new ConflictException(
        'Kendaraan sudah disewa pada tanggal tersebut',
      );
    }

    const jumlahHari = Math.ceil(
      (selesai.getTime() - mulai.getTime()) / (1000 * 60 * 60 * 24),
    );

    const totalBiaya = jumlahHari * Number(kendaraan.hargaSewa);

    return this.prisma.penyewaan.update({
      where: { id },
      data: {
        pelangganId,
        kendaraanId,
        tanggalMulai: mulai,
        tanggalSelesai: selesai,
        totalBiaya,
      },
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.penyewaan.delete({
      where: { id },
    });
  }
}
