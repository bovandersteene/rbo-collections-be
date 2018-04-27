import { Controller, Headers, HttpStatus, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpCode } from '@nestjs/common/utils/decorators/http-code.decorator';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @Post()
  @HttpCode(HttpStatus.OK)
  async getToken(@Req() request,
                 @Headers('authorization') token: string,
                 @Headers('user-agent') browser: string): Promise<{ expires_in: number, access_token: string }> {
    const b64auth = (token || '').split(' ')[1] || '';
    const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');
    return this.authService.createToken(login, password);
  }
}
