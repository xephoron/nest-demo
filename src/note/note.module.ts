import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Note } from 'src/entities/note.entity';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Note])],
  providers: [NoteService],
  controllers: [NoteController],
  exports: [],
})
export class NoteModule {}
