/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({ description: ' title of post' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ description: ' content of post' })
    @IsString()
    @IsOptional()
    content: string;

    @ApiProperty({ description: 'email of author' })
    @IsEmail()
    authorEmail: string;
}
