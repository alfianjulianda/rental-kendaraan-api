
import {
  IsInt,
  IsDateString,
  IsNotEmpty,
  Min,
} from 'class-validator';

export class CreatePenyewaanDto {
  @IsInt()
  @Min(1)
  pelangganId!: number;

  @IsInt()
  @Min(1)
  kendaraanId!: number;

  @IsDateString()
  @IsNotEmpty()
  tanggalMulai!: string;

  @IsDateString()
  @IsNotEmpty()
  tanggalSelesai!: string;
}
