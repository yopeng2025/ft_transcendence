import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { MovieService } from './movie.service.js';
import { CreatMovieDto } from './dto/creat-movie.dto.js';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies() {
    return this.movieService.getMovies();
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
        return this.movieService.getMovie(id);
  }

  @Post()
  createMovie(@Body() body: CreatMovieDto, ) {
    return this.movieService.createMovie(body);
  }

  @Patch(':id')
  updateMovie(@Param('id') id: string, @Body() body: any) {
    return this.movieService.updateMovie(id, body);
  }
}
