import AppDataSource from "../../data-source"
import Contact from "../../Entities/Contact.Entity"
import Users from "../../Entities/User.Entity"
import AppError from "../../Error/AppError"
import { IContactsRequest } from "../../Interfaces/IContacts"

const createContactService = async ({ fullName, email, phoneNumber, userId }: IContactsRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact)

  const contacts = await contactRepository.find()

  const nameAlreadyExists = contacts.find((contacts) => contacts.email === email)

  if (nameAlreadyExists) {
    throw new AppError("Contact already exists")
  }
  const userRepository = AppDataSource.getRepository(Users);

  const findUser = await userRepository.findOneBy({
    id: userId
  });

  if (!findUser) {
    throw new AppError("User is not exists", 404);
  }

  const newContact = new Contact()
  newContact.fullName = fullName
  newContact.email = email
  newContact.phoneNumber = phoneNumber
  newContact.createdAt = new Date()
  newContact.user = findUser

  contactRepository.create(newContact)

  await contactRepository.save(newContact)

  return newContact
}

export default createContactService
