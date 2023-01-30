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
  contact,
}: IUserRequest): Promise<Users> => {
  const userRepository = AppDataSource.getRepository(Users);

  const ContactRepository = AppDataSource.getRepository(Contact);

  const users = await userRepository.find();

  const emailAlredyExists = users.find((user) => user.email === email);

  if (emailAlredyExists) {
    throw new AppError("Email already exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdContact = ContactRepository.create(contact);

  await ContactRepository.save(createdContact);

  const user = userRepository.create({
    fullName,
    email,
    password: hashedPassword,
    phoneNumber,
    isAdmin,
    contact: createdContact,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
