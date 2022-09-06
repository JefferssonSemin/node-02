import {v4} from 'uuid'
import {Entity} from 'typeorm'

@Entity("cars")
class Car {

    id: string

    name: string

    description: string

    daily_rate: string

    available: boolean

    licence_plate: string

    fine_amount: number

    brand: string

    category_id: string

    created_at: Date

    constructor(){
        if(!this.id)
        this.id = v4()
        this.available = true
        this.created_at = new Date()
    }
}

export {Car}