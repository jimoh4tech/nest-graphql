import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Resolver('Author')
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Mutation('createAuthor')
  create(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorsService.create(createAuthorInput);
  }

  @Query('authors')
  findAll() {
    return this.authorsService.findAll();
  }

  @Query('author')
  findOne(@Args('id') id: number) {
    return this.authorsService.findOne(id);
  }

  @Mutation('updateAuthor')
  update(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorsService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation('removeAuthor')
  remove(@Args('id') id: number) {
    return this.authorsService.remove(id);
  }
}
