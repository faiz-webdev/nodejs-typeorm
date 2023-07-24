import { Request, Response } from "express";
import { User } from "../entities/User";
import { getManager } from "typeorm";

const homeDetail = async (req: Request, res: Response) => {
  const entityManager = getManager();

  //Save user
  //   let data = await entityManager.insert(User, {
  //     name: "demo",
  //     email: "demo1@example.com",
  //   });

  /*const user = new User();
  user.email = "demo3@example.com";
  user.name = "demo";
  const data = await entityManager.save(user);

  */

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
  let data = await entityManager.clear(User);

  res.status(200).json({
    data,
  });
};

export { homeDetail };
