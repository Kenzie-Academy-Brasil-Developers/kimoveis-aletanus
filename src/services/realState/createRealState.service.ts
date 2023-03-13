import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { ICreateRealEstate, IReturnCreateRealEstate } from "../../interfaces/realEstate.interfaces"
import { createAddressSchema } from "../../schemas/address.schemas"
import { returnRealEstateSchema } from "../../schemas/realState.schemas"

export const createRealStateService = async (realStateData: ICreateRealEstate): Promise<IReturnCreateRealEstate> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)
    if (realStateData.address.number) {
        const addressExists: Address | null = await addressRepo.findOne({
            where:{
                street: realStateData.address.street,
                number: realStateData.address.number, 
                city: realStateData.address.city
            }
        })
        if(addressExists){
            throw new AppError("Address already exists", 409)
        }
    }
    const newAddress = createAddressSchema.parse(realStateData.address)
    const address: Address = addressRepo.create(newAddress)
    await addressRepo.save(address)
    const category: Category | null = await categoryRepo.findOneBy({
      id: realStateData.categoryId
    })
    if(!category){
        throw new AppError('Category not found', 404)
    }
    const newRealEstate: RealEstate = realEstateRepo.create({
        ...realStateData,
        address: address,
        category: category
    })
    await realEstateRepo.save(newRealEstate)
    const realEstate = returnRealEstateSchema.parse(newRealEstate)
    return realEstate
}