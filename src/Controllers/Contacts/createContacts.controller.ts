import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import { IContactsRequest } from "../../Interfaces/IContacts"
import createContactService from "../../Services/Contacts/createContacts.service"

const createSpecialtyController = async (req: Request, res: Response) => {
  const createContact: IContactsRequest = req.body

  const newSpecialty = await createContactService(createContact)

  return res.status(201).json(instanceToPlain(newSpecialty))
}
export default createSpecialtyController
