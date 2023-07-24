import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Content } from "./Content";

@Entity("posts")
export class Post extends Content {
   @Column()
  viewcount: string;
}
