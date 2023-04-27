import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber } from 'class-validator';

export class NoteDTO {
  @IsNumber()
  id: number;

  @IsAlpha()
  title: string;

  @IsAlphanumeric()
  content: string;

  @IsNotEmpty()
  date: string;
}
