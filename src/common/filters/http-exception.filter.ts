/* eslint-disable prettier/prettier */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response, Request } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus() as number;
    const exceptionResponse = exception.getResponse();
    const error = typeof exceptionResponse === 'string' ? { message: exceptionResponse } : (exceptionResponse as object);
    response.status(status).json({
      ...error,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

