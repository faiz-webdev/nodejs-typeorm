import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";
import { getManager } from "typeorm";
import { UserRepo, UserWithoutRepository } from "../repository/UserRepository";
import { UserEntity } from "../entity-relationship/UserEntity";
import { ProfileEntity } from "../entity-relationship/ProfileEntity";

const homeDetail = async (req: Request, res: Response) => {
  const entityManager = getManager();

  const profile = new ProfileEntity();
  profile.gender = "male";
  profile.photo = "demo.jpg";
  let data: any = await entityManager.save(profile);

  const user = new UserEntity();
  user.name = "sam";
  user.email = "sam@test.com";
  user.profile = profile;
  const userRes = await user.save();
  data = {...data, userRes}

  //Update user
  /*let data = await entityManager.update(User, 1, {email:'test@example.com'});
   */

  //delete user
  /*let data = await entityManager.delete(User, 3);
   */

  //get all user
  /*let data = await entityManager.find(User);
   */

  //get one user by id
  /*let data = await entityManager.findOne(User, { where: { id: 1 } });*/

  // truncate user tabe
  // let data = await entityManager.clear(User);

  res.status(200).json({
    data,
  });
};

export { homeDetail };
