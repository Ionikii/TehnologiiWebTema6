import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
export declare class PersonService {
    private readonly personRepository;
    findByEmail(email: string): Promise<Person | undefined>;
    constructor(personRepository: Repository<Person>);
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    findAll(): string;
    findOne(id: number): Promise<Person | undefined>;
    update(id: number, updatePersonDto: UpdatePersonDto): string;
    remove(id: number): string;
}
