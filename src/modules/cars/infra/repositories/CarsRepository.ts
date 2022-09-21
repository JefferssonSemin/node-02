import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppDataSource } from "@shared/infra/typeorm/data-source";
import { Car } from "../typeorm/entities/Car";


class CarsRepository implements ICarsRepository{
  
  private carsRepository = AppDataSource.getRepository(Car)    

  async create({name, brand, category_id, daily_rate,
     description, fine_amount, license_plate
  }: ICreateCarDTO): Promise<Car> {

    const car = this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name
    })

    await this.carsRepository.save(car)
    
    return car
  }

  async findByLicensePlate(licensePlate: string): Promise<Car | null> {
    return this.carsRepository.findOne({where: { license_plate: licensePlate }})
  }
}

export {CarsRepository}