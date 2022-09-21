import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { AppError } from "@shared/errors/AppError"
import { CreateCarUseCase } from "./CreateCarUseCase"


let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('Create car', ()=>{

    beforeEach(()=>{ 
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
    })

    it('should create a new car', async () => {
        const car = await createCarUseCase.execute({
            name: 'test',
            description: 'test',
            daily_rate: 100,
            license_plate:"abc",
            fine_amount: 40, 
            brand: "asdas",
            category_id: "category"
        })

        expect(car).toHaveProperty('id')
    })
     
    it('should not be able to create a new car with an exists license plate', async () => {
        expect(async () =>{
            await createCarUseCase.execute({
                name: 'car1',
                description: 'test',
                daily_rate: 100,
                license_plate: "abc",
                fine_amount: 40,
                brand: "asdas",
                category_id: "category"
                })

            await createCarUseCase.execute({
                name: 'test',
                description: 'test',
                daily_rate: 100,
                license_plate: "abc",
                fine_amount: 40,
                brand: "asdas",
                category_id: "category"
                })   
        }).rejects.toBeInstanceOf(AppError)
    })

    it('should not be able to create a new car with available true by deafult', async () => {
       
          const car = await createCarUseCase.execute({
                name: 'car available',
                description: 'aaa',
                daily_rate: 100,
                license_plate: "aaaa",
                fine_amount: 60,
                brand: "brand",
                category_id: "category"
                })

            expect(car.available).toBe(true)
    })
})