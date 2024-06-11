import "reflect-metadata";
import express, { type Request, type Response} from 'express';
import dotenv from 'dotenv';

import dataSource from './datasource/datasource';
import { User } from './entities/User.entity';
import { Profile } from './entities/Profile.entity';
import { Todo } from './entities/Todo.entity';
import { Student } from './entities/Student.entity';
import { Course } from './entities/Course.entity';

const app = express();
const PORT = 5000;
dotenv.config();

dataSource.initialize()
  .then(() => {
    console.log("Successfully connected with the database");
    app.listen(PORT, () => console.log(`listen on Port ${PORT}`));
  })
  .catch((err) => {
    console.log('Fail to connect, ', err);
  });

app.get("/", async (req: Request, res: Response) => { 
  const studentRepo = dataSource.getRepository(Student);
  const courseRepo = dataSource.getRepository(Course);

  const result = await courseRepo.find({
    relations: ["students"]
  });

  // const result = await studentRepo.find();
  res.json(result);

  // const course1 = new Course();
  // course1.code = "CS-114";
  // course1.title = "Computer Programming";

  // const course2 = new Course();
  // course2.code = "MA-114";
  // course2.title = "Math Calculus";

  // const student = new Student();
  // student.firstname = "Joan";
  // student.lastname = "Boe";
  // student.age = 22;
  // student.rollNo = "ST-001";
  // student.courses = [course1, course2];

  // const savedStudent = await studentRepo.save(student);
  // res.json(savedStudent);
});

// app.get("/", async (req: Request, res: Response) => { 
//   const userRepo = dataSource.getRepository(User);
//   const todoRepo = dataSource.getRepository(Todo);

  // const todo1 = new Todo();
  // todo1.title = "Learn TypeORM";
  // todo1.description = "Learn Typeorm on YouTube";

  // const todo2 = new Todo();
  // todo2.title = "Learn Express";
  // todo2.description = "Learn Express on YouTube";

  // const todo3 = new Todo();
  // todo3.title = "Learn PostgreSQL";
  // todo3.description = "Learn PostgreSQL on YouTube";

  // const user = new User;
  // user.firstname = "Johnny";
  // user.lastname = "Doe";
  // user.isActive = true;
  // user.todos = [todo1, todo2, todo3];

  // let savedUser = await userRepo.save(user);
  // res.json(savedUser);

  // const allUsers = await userRepo.find({
  //   relations: ["todos"]
  // });
  // res.json(allUsers);

//   let allTodos = await todoRepo.find({
//     relations: ["user"]
//   });

//   res.json(allTodos);
// });


// app.get("/", async (req: Request, res: Response) => {
  // let userRepo = dataSource.getRepository(User);
  // let profileRepo = dataSource.getRepository(Profile);

  // const profile = new Profile();
  // profile.gender = "female";
  // profile.skill = "Java";
  // // const saveProfile = await profileRepo.save(profile);

  // const user1 = new User();
  // user1.firstname = "john";
  // user1.lastname = "doe";
  // user1.isActive = true;
  // user1.profile = profile;
  // const result = await userRepo.save(user1);
  // user1.profile = saveProfile;
  // const result = await userRepo.save(user1);
  // const user2 = new User();
  // user2.firstname = "jane";
  // user2.lastname = "doe";
  // user2.isActive = true;

  // const result = await userRepo.save([user1, user2]);


  // const result = await userRepo.find({
  //   select: ["firstname", "lastname"],
  //   order: { id: "DESC" },
  //   // relations: ['profile']
  // });

  // console.log(result[0].profile);

  // const result = await userRepo.update(1, {
  //   firstname: "johnny"
  // });

  // const result = await userRepo.delete(2);


  // const result = await profileRepo.find({
  //   relations: ["user"]
  // });
  // console.log(allProfiles[0].user)

  // res.json(result);
// });

