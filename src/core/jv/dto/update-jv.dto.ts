import { PartialType } from '@nestjs/mapped-types';
import { CreateJvDto } from './create-jv.dto';

export class UpdateJvDto extends PartialType(CreateJvDto) {}
