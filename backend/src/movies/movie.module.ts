import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller.js';
import { MovieService } from './movie.service.js';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
