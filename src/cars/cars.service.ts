import { Get, Injectable } from '@nestjs/common';
import { Cars } from '../interface/cars.interface';

@Injectable()
export class CarsService {

    public carros:Cars[] = [
        {
            marca: 'toyota',
            id: 1,
            año: 2021
        },
        {
            marca: 'kia',
            id: 2,
            año: 2021
        },
        {
            marca: 'mazda',
            id: 3,
            año: 2021
        },
        {
            marca: 'hiundai',
            id: 4,
            año: 2021
        }
    ]

    getAllcars(){

        return this.carros

    }

    addCars(carro:Cars){
         this.carros.push(carro)
         return  this.getAllcars()

    }

    updateCars(carro:Cars){
        const updCarro = this.carros.find((x)=> {
            x.id===carro.id
        })
       console.log(updCarro)
        return updCarro
    }


}
