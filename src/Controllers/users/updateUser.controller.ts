import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../Interfaces/IUser";
import updateUserService from "../../Services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { fullName, email, phoneNumber, contact }: IUserUpdate = req.body;
  const userId = req.params.id;
  const updatedUser = await updateUserService(
    { fullName, email, phoneNumber, contact },
    userId
  );
  return res.json(instanceToPlain(updatedUser));
};

export default updateUserController;
