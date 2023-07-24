import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 100, nullable: true })
  password: string;

  @Column({ nullable: true })
  views: number;

  @Column({ default: false })
  isPublished: boolean;
}
