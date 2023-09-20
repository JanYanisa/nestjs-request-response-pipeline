import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.log(AuthGuard.name);
    const request = context.switchToHttp().getRequest();
    this.logger.log(`${request.path}`);
    return true; // true mean canActivate, false will not pass guard and throw err
  }
}
