import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PhotoEntity } from "./PhotoEntity";
import { QuestionEntity } from "./QuestionEntity";

@Entity("categories")
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @ManyToMany(() => QuestionEntity, (question) => question.categories)
  question: QuestionEntity[];
}
