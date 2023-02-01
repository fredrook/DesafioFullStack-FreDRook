import { Router } from "express"
import createSpecialtyController from "../Controllers/Contacts/createContacts.controller"
import getContactsController from "../Controllers/Contacts/getContacts.controller"
import listContactsByIdController from "../Controllers/Contacts/listContactsById.controller"

import authMiddleware from "../Middlewares/auth.middleware"
import isAdmMiddleware from "../Middlewares/isAdm.middleware"

const contactsRoutes = Router()

contactsRoutes.post("", createSpecialtyController, authMiddleware, isAdmMiddleware)
contactsRoutes.get("", getContactsController)
contactsRoutes.get("/:id/doctors", listContactsByIdController)

export default contactsRoutes
