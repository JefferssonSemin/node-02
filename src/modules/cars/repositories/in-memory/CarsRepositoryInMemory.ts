import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO"
import { Car } from "@modules/cars/infra/typeorm/entities/Car"
import { ICarsRepository } from "../ICarsRepository"


class CarsRepositoryInMemory implements ICarsRepository{

    cars: Car[] = []

    async create({brand, description,name, daily_rate, fine_amount, license_plate, category_id}: ICreateCarDTO): Promise<Car> {
        const car = new Car()

        Object.assign(car, {
            brand,
            description,
            name,
            daily_rate,
            fine_amount,
            license_plate,
            category_id,
        })

    this.cars.push(car)

    return car
    }

       
    async findByLicensePlate(licensePlate: string): Promise<Car>{
        return await this.cars.find(c => c.license_plate === licensePlate)!
    }

}

export {CarsRepositoryInMemory}   
  