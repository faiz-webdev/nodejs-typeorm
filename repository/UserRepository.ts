import { EntityRepository, AbstractRepository, EntityManager } from "typeorm";
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

@EntityRepository(User)
export class UserWithoutRepository {
  constructor(private manager: EntityManager) {}

  async customSave(name: string, email: string) {
    const user = new User();

    user.email = email;
    user.name = name;

    return await this.manager.save(user);
  }

  async findByNameAndEmail(name: string, email: string) {
    return await this.manager.findOne(User, { where: { name, email } });
  }
}
