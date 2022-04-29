import { CreateAuthorInput } from './create-author.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
