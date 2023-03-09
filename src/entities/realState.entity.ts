import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { Address } from "./adresses.entity"
import { Category } from "./categories.entity"
import { Schedule } from "./schedulesUsersProperties.entity"
  
@Entity()

export class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "boolean", default: true })
    sold: boolean = false
  
    @Column({ type: "decimal", precision: 12, scale: 2 })
    value: number | string
  
    @Column({ type: "integer" })
    size: number
  
    @CreateDateColumn({ type: "date" })
    createdAt: string
  
    @UpdateDateColumn({ type: "date" })
    updatedAt: string
  
    @OneToOne(() => Address)
    @JoinColumn()
    address: Address
  
    @ManyToOne(() => Category, (categories) => categories.realEstate)
    category: Category
  
    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]
}