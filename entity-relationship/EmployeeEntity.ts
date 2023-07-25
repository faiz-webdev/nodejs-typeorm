import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PhotoEntity } from "./PhotoEntity";

@Entity("employees")
export class EmployeeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

@OneToMany(()=> PhotoEntity,photo=> photo.employee)
  photos: PhotoEntity[];
}
