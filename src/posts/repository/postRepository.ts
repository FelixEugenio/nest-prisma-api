/* eslint-disable prettier/prettier */
import { PrismaService } from "src/prisma/prisma.service";
import { PostEntity } from "../entities/post.entity";
import { CreatePostDto } from "../dto/create-post.dto";
import { UpdatePostDto } from "../dto/update-post.dto";
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { UnautorizedError } from "src/common/errors/types/Unautorized-error";
import { NotFoundError } from "src/common/errors/types/NotFoundError";

@Injectable()
export class PostRepository {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

   async create(createPostDto: CreatePostDto): Promise<PostEntity> {

    const { authorEmail } = createPostDto;

    delete createPostDto.authorEmail;

    const user = await this.prismaService.user.findUnique({
      where: {
        email: authorEmail
      }
    })

    if(!user) {
        throw new NotFoundError('Author Not Found');
    }

    const data: Prisma.PostCreateInput = {
      ...createPostDto,
      author: {
        connect: {
          email: authorEmail
        }
      }
    }

        return this.prismaService.post.create({
          data
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
