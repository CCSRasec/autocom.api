import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user', uniqueItems: true })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'strongPassword123', description: 'The password of the user' })
  @IsNotEmpty()
  password: string;
}