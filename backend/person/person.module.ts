import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],  // Asigură-te că entitatea Person este inclusă
  providers: [PersonService],
  exports: [PersonService],  // Aici exportăm PersonService pentru a putea fi folosit în alte module
  controllers: [PersonController],
})
export class PersonModule {}