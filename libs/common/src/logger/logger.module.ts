import { Module } from '@nestjs/common';
import { LoggerModule as PnoLoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    PnoLoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class LoggerModule {}
