import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      console.log('Invalid password for user:', username);
      throw new UnauthorizedException();
    }
    console.log('User authenticated:', username);
    const payload = { sub: user.userId, username: user.username };
    const secret = this.configService.get<string>('JWT_SECRET');

    return {
      access_token: await this.jwtService.signAsync(payload, { secret }),
    };
  }
}
