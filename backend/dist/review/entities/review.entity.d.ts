import { Activity } from "activity/entities/activity.entity";
import { Person } from "person/entities/person.entity";
export declare class Review {
    id: number;
    activity: Activity;
    student: Person;
    feedback: string;
    timestamp: Date;
}
