import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
    constructor(private readonly jwtService: JwtService){ }
    async generateToken(user){
        const payload = {user};
        return this.jwtService.sign(payload, {
            secret: process.env.SECRET,
            expiresIn: process.env.EXPIRE_JWN
        })
    }
}
