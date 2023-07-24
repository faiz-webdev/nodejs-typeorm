import { Column, ChildEntity } from "typeorm";
import { Content } from "./Content";

@ChildEntity("posts")
export class Post extends Content {
   @Column()
  viewcount: string;
}
