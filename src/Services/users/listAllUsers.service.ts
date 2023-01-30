import AppDataSource from "../../data-source";
import Users from "../../Entities/User.Entity";

const listUsersService = async (): Promise<Users[]> => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find({
    relations: {
      contact: true,
    },
  });
  return users;
};

export default listUsersService;
