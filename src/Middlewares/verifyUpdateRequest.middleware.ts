import { Request, Response, NextFunction } from "express"
import AppError from "../Error/AppError"

const verifyUpdateRequestUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const updateUserId = req.params.id
  const reqUserId = req.user.id
  const isAdmin = req.user.isAdm
  const updateRequest = req.body

  if (reqUserId !== updateUserId && !isAdmin) {
    throw new AppError("Unauthorized", 401)
  }

  if (
    updateRequest.hasOwnProperty("id") ||
    updateRequest.hasOwnProperty("email") ||
    updateRequest.hasOwnProperty("isAdmin") ||
    updateRequest.hasOwnProperty("isActive") ||
    updateRequest.hasOwnProperty("createdAt") ||
    updateRequest.hasOwnProperty("updatedAt")
  ) {
    throw new AppError("Cannot update id, email, isAdmin, isActive, createdAt or updatedAt")
  }

  return next()
}

export default verifyUpdateRequestUserMiddleware
