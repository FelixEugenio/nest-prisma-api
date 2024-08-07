/* eslint-disable prettier/prettier */
import { Post } from "@prisma/client";

export class PostEntity implements Post {
    id: number;
    title: string;
    published: boolean;
    content: string;
    author_id: number;
    createdAt: Date;
    updatedAt: Date;
}
