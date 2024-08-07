/* eslint-disable prettier/prettier */
import { PrismaService } from "src/prisma/prisma.service";
import { PostEntity } from "../entities/post.entity";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostRepository {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

   async create(createPostDto: CreatePostDto): Promise<PostEntity> {
        return this.prismaService.post.create({
          data: createPostDto
        })
      }

     async  findAll(): Promise<PostEntity[]> {
        return this.prismaService.post.findMany();
      }

    async  findOne(id: number): Promise<PostEntity> {
        return this.prismaService.post.findUnique({
          where: {
            id,
          }
        });
      }

    async  update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
        return this.prismaService.post.update({
          where: {
            id,
          },
          data: updatePostDto
        });
      }

    async  remove(id: number): Promise<PostEntity> {
        return this.prismaService.post.delete({
          where: {
            id,
          }
        });

      }
}
