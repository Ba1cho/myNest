import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import { CreateUserDto } from 'src/dto/create-user.dto';
import { ApiErorr} from '../error/erors'
import * as bcrypt from 'bcrypt'
import { UserLogin } from 'src/dto/userLogin.dto';
import { TokenService } from '../token/token.service';
import { UserResponse } from 'src/dto/userResponse.dto';

@Injectable()
export class AuthService {
    constructor(private readonly UsersService: UsersService,
                private readonly TokenService:TokenService){}
    

    async registerUser(dto: CreateUserDto): Promise<CreateUserDto> {
        const existUser = await this.UsersService.getUserEmail(dto.email)
        if(existUser) throw new BadRequestException(ApiErorr.USER_EXIST)
        return this.UsersService.create(dto)
    }
    async loginUser(dto: UserLogin): Promise<UserResponse> {
        const existUser = await this.UsersService.getUserEmail(dto.email)
        if(!existUser) throw new BadRequestException(ApiErorr.USER_NOT_EXIST)
        const validatePassword = await bcrypt.compare(dto.password, existUser.password)
        if(!validatePassword) throw new BadRequestException(ApiErorr.WRONG_DATA)
        //return existUser
        const token = await this.TokenService.generateToken(dto.email)
        return {...existUser, token}
     
    }
}
