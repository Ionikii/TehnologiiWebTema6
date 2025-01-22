import { text } from "stream/consumers";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column({ type: "text", nullable: false }) 
  public firstName: string;

  @Column({ type: "text", nullable: false }) 
  public lastName: string;

  @Column({ type: "text", nullable: false })
  public email: string;

  @Column({ type: "boolean", nullable: false })
  public isTeacher: boolean;

  @Column({type: "text",nullable: false})
  public password:string;
    reviews: any;
}
