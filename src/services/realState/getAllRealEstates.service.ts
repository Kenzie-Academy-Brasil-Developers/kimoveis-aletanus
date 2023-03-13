import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { IReturnAllRealEstatesSchema } from "../../interfaces/realEstate.interfaces"

export const getAllRealEstatesService = async (): Promise<IReturnAllRealEstatesSchema> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const findAllRealEstates: Array<RealEstate> = await realEstateRepo.find({
        relations: {
            address: true
        }
    })
    return findAllRealEstates
}