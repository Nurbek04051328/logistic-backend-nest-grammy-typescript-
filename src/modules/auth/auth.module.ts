import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { ConfigService } from '@nestjs/config';
import { AccessStrategy } from './strategies/access.strategy';

@Module({
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get("JWT_ACCESS_SECRET"),
        signOptions: {
          expiresIn: '15m',
        },
      }),
    }),
  ],
  providers: [
    AuthService,
    AccessStrategy,
  ],
  controllers: [AuthController]
})
export class AuthModule {}
