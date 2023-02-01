import { Request, Response } from "express"
import getContactsService from "../../Services/Contacts/getContacts.service"


const getContactsController = async (req: Request, res: Response) => {
  const listAllContacts = await getContactsService()

  return res.status(200).json(listAllContacts)
}

export default getContactsController
