import { PartialType } from '@nestjs/mapped-types';
import { CreatePenyewaanDto } from './create-penyewaan.dto';

export class UpdatePenyewaanDto extends PartialType(CreatePenyewaanDto) {}