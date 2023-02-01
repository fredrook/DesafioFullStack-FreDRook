import { Request, Response } from "express"
import { IContactsRequest } from "../../Interfaces/IContacts"
import listContactsByIdService from "../../Services/Contacts/listContactsById.service"

const listContactsByIdController = async (req: Request, res: Response) => {
  const id = req.params.id

  const specialtiesList: IContactsRequest = await listContactsByIdService(id)

  return res.status(200).send(specialtiesList)
}

export default listContactsByIdController
