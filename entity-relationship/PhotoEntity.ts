import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EmployeeEntity } from "./EmployeeEntity";

@Entity("photos")
export class PhotoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  url: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.photos)
//   @JoinColumn({name: 'emp_id'})
  employee: EmployeeEntity;
}
