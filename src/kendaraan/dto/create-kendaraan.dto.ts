import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateKendaraanDto {
  @IsString()
  @IsNotEmpty()
  merk: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsInt()
  @Min(1900)
  tahun: number;

  @IsString()
  @IsNotEmpty()
  platNomor: string;

  @IsString()
  @IsNotEmpty()
  jenis: string;

  @IsNumber()
  @Min(0)
  hargaSewa: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}