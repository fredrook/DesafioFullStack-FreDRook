import AppDataSource from "../../data-source";
import Users from "../../Entities/User.Entity";
import AppError from "../../Error/AppError";
import { IUser } from "../../Interfaces/IUser";

const retrieveUserService = async (userId: string): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(Users);
  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contact: true,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  return findUser;
};

export default retrieveUserService;
