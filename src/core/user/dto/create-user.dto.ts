import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { Gender } from '../interfaces/user.interface';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  firstName: string;
  @IsString()
  @MinLength(3)
  lastName: string;
  @IsEmail()
  email: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  age?: number;
  @IsEnum(Gender)
  gender: Gender;
}
