import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Author } from '../../graphql';

export class CreateAuthorInput extends Author {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(3)
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
