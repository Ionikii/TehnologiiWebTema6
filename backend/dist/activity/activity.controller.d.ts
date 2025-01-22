import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
export declare class ActivityController {
    private readonly activityService;
    constructor(activityService: ActivityService);
    create(createActivityDto: CreateActivityDto): Promise<import("./entities/activity.entity").Activity>;
    findAll(): Promise<import("./entities/activity.entity").Activity[]>;
    findOne(id: string): Promise<import("./entities/activity.entity").Activity | null>;
    update(id: string, updateActivityDto: UpdateActivityDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
