/* eslint-disable prettier/prettier */
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    NotFoundException,
    ConflictException,
  } from '@nestjs/common';
  import { catchError, Observable } from 'rxjs';
import { NotFoundError } from '../types/NotFoundError';
import { ConflictError } from '../types/ConfictError';
  @Injectable()
  export class ConflictInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next.handle().pipe(
        catchError(error => {
          if (error instanceof ConflictError) {
            throw new ConflictException(error.message);
          } else {
            throw error;
          }
        }),
      );
    }
  }
