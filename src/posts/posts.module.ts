/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostRepository } from './repository/postRepository';

@Module({
  controllers: [PostsController],
  providers: [PostsService,PrismaService,PostRepository]
})
export class PostsModule {}
