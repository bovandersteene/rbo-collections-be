import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

@Guard()
export class AdminGuard implements CanActivate {
  canActivate(dataOrRequest, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return dataOrRequest.user && dataOrRequest.user.admin;
  }
}