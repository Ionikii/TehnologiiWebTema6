import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ){

  }

  create(createPersonDto: CreatePersonDto) {
    const person = this.personRepository.create(createPersonDto);  
    return this.personRepository.save(person); 
  }
  
  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return this.personRepository.findOneBy({id});
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
