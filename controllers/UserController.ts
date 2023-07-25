import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";
import { getManager, getRepository } from "typeorm";
import { UserRepo, UserWithoutRepository } from "../repository/UserRepository";
import { UserEntity } from "../entity-relationship/UserEntity";
import { ProfileEntity } from "../entity-relationship/ProfileEntity";
import { EmployeeEntity } from "../entity-relationship/EmployeeEntity";
import { PhotoEntity } from "../entity-relationship/PhotoEntity";
import { CategoryEntity } from "../entity-relationship/CategoryEntity";
import { QuestionEntity } from "../entity-relationship/QuestionEntity";

const homeDetail = async (req: Request, res: Response) => {
  const entityManager = getManager();

  /*
  #######Ont to One relationship###########
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

  */

  /*
  ##########One to Many relationship##########
  */
  /*employee.name = "Employee";
  await entityManager.save(employee);

  const p1 = new PhotoEntity();
  p1.url = 'demo.png';
  p1.employee = employee;

  const p2 = new PhotoEntity();
  p2.url = 'demo1.png';
  p2.employee = employee;
  await entityManager.save(p2);

  const p3 = new PhotoEntity();
  p3.url = 'demo2.png';
  p3.employee = employee;
  await entityManager.save(p3);*/

  /*##########One to Many relationship##########
  const p1 = new PhotoEntity();
  p1.url = "demo.png";
  await entityManager.save(p1);

  const p2 = new PhotoEntity();
  p2.url = "demo1.png";
  await entityManager.save(p2);

  const p3 = new PhotoEntity();
  p3.url = "demo2.png";
  await entityManager.save(p3);

  const employee = new EmployeeEntity();
  employee.name = "john Smith";
  employee.photos = [p1, p2, p3];
  await entityManager.save(employee);
  */

  //many to many relationship
  const c1 = new CategoryEntity();
  c1.name = "A";
  await entityManager.save(c1);

  const c2 = new CategoryEntity();
  c2.name = "B";
  await entityManager.save(c2);

  const c3 = new CategoryEntity();
  c3.name = "C";
  await entityManager.save(c3);

  const q1 = new QuestionEntity();
  q1.title = "Last test";
  q1.text = "My last test";
  q1.categories = [c1, c2, c3];
  await entityManager.save(q1);

  res.status(200).json({
    data: "success",
  });
};

const getHomeDetail = async (req: Request, res: Response) => {
  const entityManager = getManager();

  //##### one to one relationship #####
  // const repos = getRepository(UserEntity);
  // const data = await repos.find({ relations: ["profile"] });

  // const repos = getRepository(ProfileEntity);
  // const data = await repos.find({ relations: ["user"] });

  /* const data = await entityManager
  //   .getRepository(ProfileEntity)
  //   .createQueryBuilder("profile")
  //   .leftJoinAndSelect("profile.user", "user")
     .getMany();
  */

  /*const data = await entityManager
    .getRepository(UserEntity)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profile", "profile")
    .getMany();
    */

  //######one to many######
  /* const repos = getRepository(EmployeeEntity);
    const data = await repos.find({relations: ['photos']})
    */

  /*const repos = getRepository(PhotoEntity);
    const data = await repos.find({relations: ['employee']})
    */

  /*const data = await entityManager
    .getRepository(EmployeeEntity)
    .createQueryBuilder("employee")
    .leftJoinAndSelect("employee.photos", "photos")
    .getMany();*/

  /*const data = await entityManager
    .getRepository(PhotoEntity)
    .createQueryBuilder("photo")
    .leftJoinAndSelect("photo.employee", "employee")
    .getMany();
    */

  //######many to many######
  /*const repos = getRepository(QuestionEntity);
  const data = await repos.find({ relations: ["categories"] });
  */

  //######many to many######
  const data = await entityManager
    .getRepository(QuestionEntity)
    .createQueryBuilder("question")
    .leftJoinAndSelect("question.categories", "categories")
    .getMany();

  /*const data = await entityManager
    .getRepository(CategoryEntity)
    .createQueryBuilder("categories")
    .leftJoinAndSelect("categories.question", "questions")
    .getMany();*/

  res.status(200).json({
    data,
  });
};

export { homeDetail, getHomeDetail };
