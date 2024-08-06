/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";
/* eslint-disable prettier/prettier */
export class CreateUserDto {
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsString({ message: 'Email must be a string' })
    @IsEmail()
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @IsBoolean(

    )
    admin: boolean;
}
