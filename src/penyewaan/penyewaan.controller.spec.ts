import { Test, TestingModule } from '@nestjs/testing';
import { PenyewaanController } from './penyewaan.controller';
import { PenyewaanService } from './penyewaan.service';

describe('PenyewaanController', () => {
  let controller: PenyewaanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenyewaanController],
      providers: [PenyewaanService],
    }).compile();

    controller = module.get<PenyewaanController>(PenyewaanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
