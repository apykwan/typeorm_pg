import "reflect-metadata";
import express, { type Request, type Response} from 'express';
import dotenv from 'dotenv';

import dataSource from './datasource/datasource';
import { User } from './entities/User.entity';
import { Profile } from './entities/Profile.entity';

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
  let userRepo = dataSource.getRepository(User);
  let profileRepo = dataSource.getRepository(Profile);

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


  const result = await profileRepo.find({
    relations: ["user"]
  });
  // console.log(allProfiles[0].user)

  res.json(result);
});

