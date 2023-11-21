import { IsEmail, IsString, IsISO8601, IsNotEmpty, IsEnum, MinLength, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @IsEmail()
    @ApiProperty({type: String, description: 'EMAIL', example: 'ivan@mali.com'})
    email: string

    @IsString()
    @ApiProperty({type: String, description: 'password', example: 'qwerty'})
    @MinLength(1)
    password: string
  
    @IsString()
    @ApiProperty({type: String, description: 'NAME', example: 'Ivan'})
    @MinLength(1)
    nameFirst: string
  
    @IsString()
    @ApiProperty({type: String, description: 'NAMELAST', example: 'Ivanov'})
    @MinLength(1)
    nameLast: string
  
    @IsISO8601()
    @Length(5, 100)
    @ApiProperty({type: String, description: 'NAMELAST', example: 20})
    birthDate: number
  
    @IsString()
    @ApiProperty({type: String, description: 'ROLE', example: 'USER'})
    @MinLength(1)
    role: string
}
