import { Column, ChildEntity } from "typeorm";
import { Content } from "./Content";

@ChildEntity("photos")
export class Photo extends Content {
  @Column()
  size: string;
}
