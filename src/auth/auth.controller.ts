import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDTO } from './interfaces/user.dto';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  login(@Body() userDTO: userDTO): any {
    // TODO
    return this.authService.login(userDTO.username, userDTO.password);
  }
}
