import { Router } from "express";

import isOwnerMiddleware from "../Middlewares/isOwner.middleware";
import authMiddleware from "../Middlewares/auth.middleware";
/* import isAdmMiddleware from "../Middlewares/isAdm.middleware"; */
import verifyUpdateRequestUserMiddleware from "../Middlewares/verifyUpdateRequest.middleware";

import creteUserController from "../Controllers/users/createUser.controller";
import listAllUsersController from "../Controllers/users/listAllUsers.controller";
import updateUserController from "../Controllers/users/updateUser.controller";
import disableUserController from "../Controllers/users/disableUser.constroller";

const userRoutes = Router();

userRoutes.post("", creteUserController);
userRoutes.get("", /* authMiddleware, */ listAllUsersController);
userRoutes.patch(
  "/:id",
  authMiddleware,
  verifyUpdateRequestUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  authMiddleware,
  isOwnerMiddleware,
  disableUserController
);

export default userRoutes;
