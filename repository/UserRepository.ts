import { EntityRepository, AbstractRepository } from "typeorm";
import { User } from "../entities/User";
import { NextFunction } from "express";

@EntityRepository(User)
export class UserRepo extends AbstractRepository<User> {
  customSave(name: string, email: string) {
    const user = new User();

    user.email = email;
    user.name = name;

    return this.manager.save(user);
  }

  findByNameAndEmail(name: string, email: string) {
    return this.repository.findOne({ where: { name, email } });
  }
}
