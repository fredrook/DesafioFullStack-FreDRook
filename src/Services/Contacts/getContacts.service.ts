import AppDataSource from "../../data-source"
import Contact from "../../Entities/Contact.Entity"

const getContactsService = async () => {
  const contactsRepository = AppDataSource.getRepository(Contact)

  const contacts = await contactsRepository.find()

  return contacts
}

export default getContactsService
