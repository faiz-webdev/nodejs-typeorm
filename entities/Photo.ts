import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Content } from "./Content";

@Entity("photos")
export class Photo extends Content {
  @Column()
  size: string;
}
