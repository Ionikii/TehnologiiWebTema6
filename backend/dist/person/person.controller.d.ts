import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    create(createPersonDto: CreatePersonDto): Promise<import("./entities/person.entity").Person>;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/person.entity").Person | undefined>;
    update(id: string, updatePersonDto: UpdatePersonDto): string;
    remove(id: string): string;
}
