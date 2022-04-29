import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Post } from '../../graphql';

export class CreatePostInput extends Post {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsOptional()
  likes?: number;

  @IsNumber()
  authorId: number;
}
