import { IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
export class UserResponse{
    @IsString()
    @ApiProperty({type: String, description: 'user regist EMAIL'})
    email: string
    
    @IsString()
    @ApiProperty({type: String, description: 'user regist password'})
    password: string

    @IsString()
    @ApiProperty({type: String, description: 'user regist name'})
    nameFirst: string

    @IsString()
    @ApiProperty({type: String, description: 'user token'})
    token: string
}