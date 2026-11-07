
import { Module } from '@nestjs/common';
import { PelangganService } from './pelanggan.service';
import { PelangganController } from './pelanggan.controller';
import { PelangganResolver } from './pelanggan.resolver';

@Module({
  controllers: [PelangganController],
  providers: [PelangganService, PelangganResolver],
})
export class PelangganModule {}
