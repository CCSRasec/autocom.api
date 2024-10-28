import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from '../model/create-user.dto';
import { User } from '../user.entity';

export function ApiUserCreation() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new user' }),
    ApiBody({
      description: 'User data to create a new user',
      type: CreateUserDto,
    }),
    ApiResponse({
      status: 201,
      description: 'User created successfully',
      type: User,
    }),
    ApiResponse({ status: 400, description: 'Bad Request' }),
    ApiResponse({ status: 500, description: 'Internal Server Error' }),
  );
}