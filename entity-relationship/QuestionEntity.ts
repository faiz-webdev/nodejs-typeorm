import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
} from "typeorm";
import { CategoryEntity } from "./CategoryEntity";

@Entity("questions")
export class QuestionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  title: string;

  @Column()
  text: string;

  @ManyToMany(() => CategoryEntity)
  // @JoinTable({
  //   name: "que_cat",
  //   joinColumn: { name: "question_id", referencedColumnName: "id" },
  //   inverseJoinColumn: {
  //     name: "categories_id",
  //     referencedColumnName: "id",
  //   },
  // })
  @JoinTable()
  categories: CategoryEntity[];
}
