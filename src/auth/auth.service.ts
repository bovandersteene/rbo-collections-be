import { Component } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from './user.entity';

const adminUser: UserEntity = {
  id: 1,
  firstname: 'Bo',
  lastname: 'admin',
  admin: true,
};
const normalUser: UserEntity = {
  id: 1,
  firstname: 'Bo',
  lastname: 'Vandersteene',
  admin: false,
};

@Component()
export class AuthService {
  async createToken(login: string, password: string) {
    const expiresIn = 60 * 60, secretOrKey = 'secret';
    const user = login === 'admin' ? adminUser : normalUser;
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    // put some validation logic here
    // for example query user by id / email / username
    return true;
  }
}
