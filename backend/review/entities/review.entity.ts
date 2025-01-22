import { Activity } from "activity/entities/activity.entity";
import { Person } from "person/entities/person.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Activity, { eager: true })
  activity: Activity;

  @ManyToOne(() => Person, { eager: true })
  student: Person;

  @Column()
  feedback: string;

  @Column()
  timestamp: Date;
}