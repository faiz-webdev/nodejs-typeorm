import { Column, PrimaryGeneratedColumn } from "typeorm";

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
