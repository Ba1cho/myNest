import { ApiProperty } from '@nestjs/swagger';
export class CreateUserResponseDto { 
  @ApiProperty({type: String, description: 'Статус операции', example: 'ok'}) 
  status: string; 
}