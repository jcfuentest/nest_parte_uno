import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';





@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
