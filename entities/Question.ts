import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Content } from "./Content";

@Entity("questions")
export class Question extends Content {
  @Column()
  quescount: string;
}
