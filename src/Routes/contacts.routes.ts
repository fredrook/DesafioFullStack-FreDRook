import { Router } from "express"
import createContactController from "../Controllers/Contacts/createContacts.controller"
import getContactsController from "../Controllers/Contacts/getContacts.controller"

import authMiddleware from "../Middlewares/auth.middleware"
import isAdmMiddleware from "../Middlewares/isAdm.middleware"

const contactsRoutes = Router()

contactsRoutes.post("", createContactController, authMiddleware, isAdmMiddleware)
contactsRoutes.get("", getContactsController)

export default contactsRoutes
