import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {} //AuthGuard가 jwt.strategy 내 validate 함수를 자동으로 실행시켜줌
