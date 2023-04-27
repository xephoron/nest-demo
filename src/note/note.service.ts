import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from 'src/entities/note.entity';
import { NoteDTO } from './interfaces/note.dto';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async getAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async getById(id: number): Promise<Note | null> {
    return this.noteRepository.findOneBy({ id });
  }

  async create(note: NoteDTO): Promise<any> {
    return this.noteRepository.create(note);
  }

  async update(note: NoteDTO): Promise<any> {
    return this.noteRepository.update(note.id, note);
  }
}
