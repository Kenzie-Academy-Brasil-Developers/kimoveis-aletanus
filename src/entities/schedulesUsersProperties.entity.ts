import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { RealEstate } from "./realState.entity"
import { User } from "./users.entity"

@Entity("schedules_users_properties")

export class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "date" })
    date: string

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate
}