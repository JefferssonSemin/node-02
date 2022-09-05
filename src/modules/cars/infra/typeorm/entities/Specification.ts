import {v4} from 'uuid'
import {Column, CreateDateColumn, Entity, PrimaryColumn} from 'typeorm'

@Entity("specification")
class Specification {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date
    
    constructor(){
        if(!this.id)
        this.id = v4()
    }
}

export {Specification}