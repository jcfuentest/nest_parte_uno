import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';


@Module({
  imports: [],
  controllers: [CarsController],
  exports:[],
  providers: [CarsService]
})
export class CarsModule {}
