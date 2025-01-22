import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';
export declare class ActivityService {
    private readonly activityRepository;
    constructor(activityRepository: Repository<Activity>);
    create(createActivityDto: CreateActivityDto): Promise<Activity>;
    findAll(): Promise<Activity[]>;
    findOne(id: number): Promise<Activity | null>;
    update(id: number, updateActivityDto: UpdateActivityDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
