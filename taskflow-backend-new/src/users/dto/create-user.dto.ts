import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The username of the user', example: 'john' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'The username of the user', example: 'changeme' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
