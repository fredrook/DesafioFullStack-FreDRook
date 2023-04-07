import AppDataSource from "../../data-source";
import Addresses from "../../Entities/Contact.Entity";
import Users from "../../Entities/User.Entity";
import AppError from "../../Error/AppError";
import { IUserUpdate } from "../../Interfaces/IUser";

const updateUserService = async (
  { fullName, email, phoneNumber, contact }: IUserUpdate,
  userId: string
): Promise<Users> => {
  const userRepository = AppDataSource.getRepository(Users);
  const contactRepository = AppDataSource.getRepository(Addresses);
  const findUser = await userRepository.findOneBy({ id: userId });
  const contacts = await contactRepository.find();

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(userId, {
    fullName,
    email,
    phoneNumber,
  });

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contact: true,
    },
  });

  return user!;
};

export default updateUserService;
