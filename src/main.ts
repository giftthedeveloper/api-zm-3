import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);
  // const allowedOrigin = process.env.ALLOWED_HOSTS
  const configService = app.get(ConfigService);

  const allowedOrigins = configService.get<string>('ALLOWED_HOSTS')?.split(',');
  
  app.enableCors({
    // origin: ['http://127.0.0.1:5173', 'http://localhost:5173', 'https://5173-giftthedeve-zmregistrat-emivk6mc6b6.ws-eu115.gitpod.io'],
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, 
  });

  await app.listen(3000);
  console.log('App is running at port 3000');
  console.log(allowedOrigins);
}
bootstrap();
