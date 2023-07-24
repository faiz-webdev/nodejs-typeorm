import { Column, ChildEntity } from "typeorm";
import { Content } from "./Content";

@ChildEntity("questions")
export class Question extends Content {
  @Column()
  quescount: string;
}
