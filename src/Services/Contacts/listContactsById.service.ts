import AppDataSource from "../../data-source"
import Contact from "../../Entities/Contact.Entity"
import AppError from "../../Error/AppError"

const listContactsByIdService = async (id: string) => {
  const specialtyRepository = AppDataSource.getRepository(Contact)

  const findSpecialtyById = await specialtyRepository.findOne({
    where: {
      id,
    },
    relations: {
      user: true,
    },
  })

  if (!findSpecialtyById) {
    throw new AppError("Specialty not found!", 404)
  }

  return findSpecialtyById
}

export default listContactsByIdService
