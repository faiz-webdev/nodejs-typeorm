import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cards")
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  type: string;

  @Column({ length: 100 })
  category: string;
}
