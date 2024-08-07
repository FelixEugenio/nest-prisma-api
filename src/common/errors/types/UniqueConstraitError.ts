/* eslint-disable prettier/prettier */
import { ConflictError } from './ConfictError';
import { PrismaClientError } from './PrismaClientErrors';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;

    super(`A record with this ${uniqueField} already exists.`);
  }
}
