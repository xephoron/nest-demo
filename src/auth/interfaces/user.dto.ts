import { IsNotEmpty, IsAlpha, IsStrongPassword } from 'class-validator';

export class userDTO {
  @IsNotEmpty()
  @IsAlpha()
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
