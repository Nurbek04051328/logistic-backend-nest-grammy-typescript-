import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName?: string;

  @IsString()
  phone: string;

  @IsString()
  @MinLength(6)
  password: string;
}