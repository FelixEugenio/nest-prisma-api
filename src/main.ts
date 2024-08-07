/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { UnauthorizedInterceptor } from './common/errors/interceptors/Unautorized.intercepetors.error';
import { NotFoundInterceptor } from './common/errors/interceptors/NotfoundInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  //app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor())
  await app.listen(3001);
}
bootstrap();
