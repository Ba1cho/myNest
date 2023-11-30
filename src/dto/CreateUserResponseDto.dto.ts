import { IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserParamsDto {
    @IsEmail()
    @ApiProperty({type: String, description: 'EMAIL', example: '...'})
    email: string;
  }