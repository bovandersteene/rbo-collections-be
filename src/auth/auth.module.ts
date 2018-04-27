import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import * as passport from 'passport';

@Module({
  components: [
    AuthService,
    JwtStrategy,
  ],
  controllers: [
    AuthController,
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes(
        { path: 'movie/*', method: RequestMethod.POST },
      );
  }
}
