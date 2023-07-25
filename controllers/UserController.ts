import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";
import {
  Between,
  Equal,
  In,
  LessThan,
  Like,
  MoreThan,
  Not,
  getManager,
  getRepository,
  getCustomRepository,
} from "typeorm";
import { UserRepo, UserWithoutRepository } from "../repository/UserRepository";

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

const homeDetailByRepository = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);

  //Insert user
  /*let data = await userRepository.insert({
    name: "demo",
    email: "demo1@example.com",
  });
  */

  //Save user
  /*const user = new User();
  user.email = "demo5@example.com";
  user.name = "demo";
  const data = await userRepository.save(user);
*/

  //Update user
  /*let data = await userRepository.update(1, { email: "test@example.com" });*/

  //delete user
  /*let data = await userRepository.delete(2);*/

  //get all user
  /*let data = await userRepository.find();*/

  //get one user by id
  /*let data = await userRepository.findOne({ where: { id: 1 } });*/

  // truncate user tabe
  /*let data = await userRepository.clear();*/

  //selection column
  // const data = await userRepository.find({select:['id', 'name']})

  //where
  /*const data = await userRepository.find({
    where: { name: "ram", email: "ram@mail.com" },
    select: ["id", "name"],
  });
  */

  //or condition
  /*const data = await userRepository.find({
    where: [{ name: "ram" }, { email: "demo1@example.com" }],
    select: ["id", "name"],
  });*/

  //order by
  /*const data = await userRepository.find({order:{name:'DESC'}})*/

  //order, skip , offset, take
  //   const data = await userRepository.find({ order: { id: "DESC" }, skip: 1, take:2 });

  //NOT, lesstahn condition
  const data = await userRepository.find({
    where: {
      // email: Not("demo3@example.com")
      // email: LessThan("demo3@example.com")
      // id: MoreThan(1)
      // id: Equal(1)
      // name: Like("%d%")
      // id: Between(2,4)
      // name: In(['ram', 'demo'])
    },
  });

  res.status(200).json({
    data,
  });
};

const homeDetailByCustomRepo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /*const userRepository = getCustomRepository(UserRepo);

    // const data = await userRepository.customSave("mydata", "test3@mail.com");

    const data = await userRepository.findByNameAndEmail(
      "mydata",
      "test3@mail.com"
    );
    */

    const userRepository = getCustomRepository(UserWithoutRepository);
    // const data = await userRepository.customSave("mydata", "test4@mail.com");

    const data = await userRepository.findByNameAndEmail("mydata", "test1@mail.com");

    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export { homeDetail, homeDetailByRepository, homeDetailByCustomRepo };
