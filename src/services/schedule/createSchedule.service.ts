import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../errors"
import { ICreateSchedule } from "../../interfaces/schedule.interfaces"

export const createScheduleService = async (scheduleData: ICreateSchedule, userId: number): Promise<void> => {

    const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheduleExists = await scheduleRepo.createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", { realEstateId: scheduleData.realEstateId })
    .andWhere("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.hour = :hour", { hour: scheduleData.hour })
    .getOne()
    if (scheduleExists) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }
    if (scheduleData.hour > "18:00" || scheduleData.hour < "08:00") {
        throw new AppError("Invalid hour, available times are 8AM to 18PM")
    }
    const newVisitDate = new Date(scheduleData.date)
    const dayOfTheWeek = newVisitDate.getDay()
    if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }
    const user: User | null = await userRepo.findOneBy({
        id: userId
    })
    const realEstate: RealEstate | null = await realEstateRepo.findOneBy({
        id: scheduleData.realEstateId
    })
    if (!realEstate) {
        throw new AppError("RealEstate not found", 404)
    }
    const userHasAlreadyScheduled = await scheduleRepo.findOneBy({
        date: scheduleData.date,
        hour: scheduleData.hour
    })
    if (userHasAlreadyScheduled) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }
    const schedule: Schedule = scheduleRepo.create({
        ...scheduleData,
        realEstate: realEstate,
        user: user!
    })
    await scheduleRepo.save(schedule) 
}