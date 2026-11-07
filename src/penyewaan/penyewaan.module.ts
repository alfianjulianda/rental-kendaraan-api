
import { Module } from '@nestjs/common';
import { PenyewaanService } from './penyewaan.service';
import { PenyewaanController } from './penyewaan.controller';
import { PenyewaanResolver } from './penyewaan.resolver';

@Module({
  controllers: [PenyewaanController],
  providers: [PenyewaanService, PenyewaanResolver],
})
export class PenyewaanModule {}
