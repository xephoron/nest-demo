import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Note } from 'src/entities/note.entity';
import { NoteDTO } from './interfaces/note.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAll(): Promise<Note[]> {
    return this.noteService.getAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getById(@Body() noteDTO: NoteDTO): Promise<Note | null> {
    return this.noteService.getById(noteDTO.id);
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() noteDTO: NoteDTO): Promise<any> {
    noteDTO.date = new Date().toDateString();
    return this.noteService.create(noteDTO);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Body() noteDTO: NoteDTO): Promise<any> {
    noteDTO.date = new Date().toDateString();
    return this.noteService.update(noteDTO);
  }
}
