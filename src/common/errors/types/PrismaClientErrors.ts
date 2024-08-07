/* eslint-disable prettier/prettier */
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export type PrismaClientError = PrismaClientKnownRequestError & {
    meta?: { target: string };
};
