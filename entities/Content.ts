import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({ type: "text" })
  desc: string;
}
