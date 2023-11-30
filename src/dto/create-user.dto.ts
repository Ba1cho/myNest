import { IsEmail, IsString, IsISO8601, IsNotEmpty, IsEnum, MinLength, Length, ValidateIf, IsNumber, IsInt, Min } from 'class-validator'
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

    @ValidateIf((object) => object.name!= undefined)
    @IsInt()
    @Min(2)
    @ApiProperty({type: Number, description: 'NAMELAST', example: 20})
    birthDate: number
  
    @IsString()
    @ApiProperty({type: String, description: 'ROLE', example: 'USER'})
    @MinLength(1)
    role: string
}

