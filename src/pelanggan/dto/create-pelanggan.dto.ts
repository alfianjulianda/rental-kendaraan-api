
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePelangganDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  noTelepon: string;

  @IsOptional()
  @IsString()
  alamat?: string;
}
