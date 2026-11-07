import { Module } from '@nestjs/common';
import { KendaraanService } from './kendaraan.service';
import { KendaraanController } from './kendaraan.controller';
import { KendaraanResolver } from './kendaraan.resolver';

@Module({
  controllers: [KendaraanController],
  providers: [KendaraanService, KendaraanResolver],
})
export class KendaraanModule {}