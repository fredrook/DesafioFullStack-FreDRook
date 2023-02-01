import * as bcrypt from "bcryptjs";
import AppDataSource from "../../data-source";
import Contact from "../../Entities/Contact.Entity";
import Users from "../../Entities/User.Entity";
import AppError from "../../Error/AppError";
import { IUserRequest } from "../../Interfaces/IUser";

const createUserService = async ({
  fullName,
  email,
  password,
  phoneNumber,
  isAdmin,
}: IUserRequest): Promise<Users> => {
  const userRepository = AppDataSource.getRepository(Users);

  
  const users = await userRepository.find();
  
  const emailAlredyExists = users.find((user) => user.email === email);
  
  if (emailAlredyExists) {
    throw new AppError("Email already exist");
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = userRepository.create({
    fullName,
    email,
    password: hashedPassword,
    phoneNumber,
    isAdmin,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
