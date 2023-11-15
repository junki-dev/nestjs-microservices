import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AUTH_SERVICE } from '@app/common/constants/services';
import { ClientProxy } from '@nestjs/microservices';

// @Injectable()
// export class JwtAuthGuard implements CanActivate {
//   constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}
//
//   canActivate(context: ExecutionContext) {
//     const jwt = context.switchToHttp().getRequest().cookies?.Authentication;
//     if (!jwt) {
//       return false;
//     }
//   }
// }
