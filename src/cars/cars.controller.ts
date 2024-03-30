import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { get } from 'http';
import { Cars } from 'src/interface/cars.interface';
import { CarsService } from './cars.service';


@Controller('cars')
export class CarsController {

    constructor(private cxarros : CarsService){}



    @Get()
    getCrs(){

        return this.cxarros

    }

    @Get(':id')
    getCarsById( @Param('id', ParseIntPipe) id: number){
       const carro:Cars =  this.cxarros.getAllcars().find((x )=> x.id === id)
       if( !carro) throw new NotFoundException(` Car with id ${id} not found `)

       return carro
    }
    @Patch()
    updateCars( @Body() carro:Cars){
       const update = this.cxarros.updateCars(carro)
       return update;
    }

}
