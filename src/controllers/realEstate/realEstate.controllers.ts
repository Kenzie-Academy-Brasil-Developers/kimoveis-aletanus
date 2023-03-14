import { Request, Response } from "express"
import { ICreateRealEstate, IReturnCreateRealEstate } from "../../interfaces/realEstate.interfaces"
import { createRealStateService } from "../../services/realState/createRealState.service"
import { getAllRealEstatesService } from "../../services/realState/getAllRealEstates.service"

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const realStateData: ICreateRealEstate = req.body
    const newRealEstate: IReturnCreateRealEstate = await createRealStateService(realStateData)
    return res.status(201).json(newRealEstate)
}

export const getAllRealEstatesControllers = async (req: Request, res: Response): Promise<Response> => {

    const getAllRealEstates = await getAllRealEstatesService()
    return res.status(200).json(getAllRealEstates)
}