import { Request, Response } from "express"
import { RealEstate } from "../../entities"
import { ICreateSchedule } from "../../interfaces/schedule.interfaces"
import { createScheduleService } from "../../services/schedule/createSchedule.service"
import { getAllSchedulesForARealEstateService } from "../../services/schedule/getAllSchedulesForARealEstate.service"

export const createScheduleController = async (req: Request, res: Response) => {

    const scheduleData: ICreateSchedule = req.body
    const userId: number = Number(req.user.id)
    await createScheduleService(scheduleData, userId)
    return res.status(201).json({ message: "Schedule created" })
}

export const getAllSchedulesForARealStateController = async (req: Request, res: Response) => {

    const realEstateId: number = Number(req.params.id)
    const schedules: RealEstate = await getAllSchedulesForARealEstateService(realEstateId)
    return res.status(200).json(schedules)
}