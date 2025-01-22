import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import internal from "stream";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    public id:number;

    @Column({type:"text"})
    public description:string;

    @Column({type:"integer"})
    public teacherID:number;

    @Column({type:"text"})
    public password:string;

    @Column({type:"integer"})
    public time:number;
}
