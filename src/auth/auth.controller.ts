import { UseGuards, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserLogin } from 'src/dto/userLogin.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserResponse } from 'src/dto/userResponse.dto';

@ApiTags('login & register')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('register')
    registerUser(@Body() dto:CreateUserDto): Promise<CreateUserDto>{
        return this.authService.registerUser(dto);
    }
    @Post('login')
    loginUser(@Body() dto:UserLogin){
       return this.authService.loginUser(dto);
    } 

   @UseGuards()
   @Post('test')
   test(){
    return true;
   }    
}
