import { IsEmail, IsString, IsISO8601, IsNotEmpty, IsEnum, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {
 
  @IsEmail()
  @ApiProperty({type: String, description: 'EMAIL', example: 'ivan@mali.com'})
  email: string

  @IsString()
  @ApiProperty({type: String, description: 'NAME', example: 'Ivan'})
  @MinLength(1)
  nameFirst: string

  @IsString()
  @ApiProperty({type: String, description: 'NAMELAST', example: 'Ivanov'})
  @MinLength(1)
  nameLast: string

  @IsISO8601()
  birthDate: Date

  @IsString()
  @ApiProperty({type: String, description: 'ROLE', example: 'USER'})
  @MinLength(1)
  role: string
}
