import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}
  create(createAuthorInput: CreateAuthorInput) {
    return this.prisma.author.create({
      data: createAuthorInput,
    });
  }

  findAll() {
    return this.prisma.author.findMany({});
  }

  findOne(id: number) {
    try {
      return this.prisma.author.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return this.prisma.author.update({
      where: { id },
      data: {
        ...updateAuthorInput,
      },
    });
  }

  remove(id: number) {
    return this.prisma.author.delete({
      where: { id },
    });
  }
}
