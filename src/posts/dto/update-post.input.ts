import { CreatePostInput } from './create-post.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePostInput extends PartialType(CreatePostInput) {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  likes?: number;
}
