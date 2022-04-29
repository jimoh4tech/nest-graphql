import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [AuthorsResolver, AuthorsService, PrismaService],
})
export class AuthorsModule {}
