
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAuthorInput {
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class UpdateAuthorInput {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

export class CreatePostInput {
    content: string;
    title: string;
    likes?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    authorId: number;
}

export class UpdatePostInput {
    id: number;
    content?: Nullable<string>;
    title?: Nullable<string>;
    likes?: Nullable<number>;
}

export class Author {
    id: number;
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract authors(): Nullable<Author>[] | Promise<Nullable<Author>[]>;

    abstract author(id: number): Nullable<Author> | Promise<Nullable<Author>>;

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
    abstract createAuthor(createAuthorInput: CreateAuthorInput): Author | Promise<Author>;

    abstract updateAuthor(updateAuthorInput: UpdateAuthorInput): Author | Promise<Author>;

    abstract removeAuthor(id: number): Nullable<Author> | Promise<Nullable<Author>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
}

export class Post {
    id: number;
    content: string;
    title: string;
    likes?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    authorId: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
