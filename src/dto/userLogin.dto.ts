import { IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class UserLogin{
    @IsString()
    @ApiProperty({type: String, description: 'user regist EMAIL'})
    email: string
    
    @IsString()
    @ApiProperty({type: String, description: 'user regist password'})
    password: string

}