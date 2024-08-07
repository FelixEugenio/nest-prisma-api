/* eslint-disable prettier/prettier */
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    UnauthorizedException,
  } from '@nestjs/common';
  import { catchError, Observable } from 'rxjs';
  import { UnautorizedError} from '../types/Unautorized-error';

  @Injectable()
  export class UnauthorizedInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next.handle().pipe(
        catchError(error => {
          if (error instanceof UnautorizedError) {
            throw new UnauthorizedException(error.message);
          } else {
            throw error;
          }
        }),
      );
    }
  }
