/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entities/user.entity";

/* eslint-disable prettier/prettier */
@Injectable()
export class UsersRepository {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

   async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.prismaService.user.create({
          data: createUserDto,
          include: {
            posts: {
              select: {
                title: true,
                createdAt:true,
                updatedAt:true
              }
            }
          }
        })
      }

     async  findAll(): Promise<UserEntity[]> {
        return this.prismaService.user.findMany({
            include:{
                posts: {
                  select: {
                    title: true,
                    createdAt:true,
                    updatedAt:true
                  }
                }
            }
        });
      }

    async  findOne(id: number): Promise<UserEntity> {
        return this.prismaService.user.findUnique({
          where: {
            id,
          },
          include:{
            posts: {
              select: {
                title: true,
                createdAt:true,
                updatedAt:true
              }
            }
          }
        });
      }

    async  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        return this.prismaService.user.update({
          where: {
            id,
          },
          data: updateUserDto
        });
      }

    async  remove(id: number): Promise<UserEntity> {
        return this.prismaService.user.delete({
          where: {
            id,
          }
        });

      }
}
