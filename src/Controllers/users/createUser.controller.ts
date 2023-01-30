import { Request, Response } from "express";
import createUserService from "../../Services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../Interfaces/IUser";

const creteUserController = async (req: Request, res: Response) => {
  const {
    fullName,
    email,
    password,
    phoneNumber,
    isAdmin,
    contact,
  }: IUserRequest = req.body;
  const newUser = await createUserService({
    fullName,
    email,
    password,
    phoneNumber,
    contact,
    isAdmin,
  });

  return res.status(201).send(instanceToPlain(newUser));
};

export default creteUserController;
