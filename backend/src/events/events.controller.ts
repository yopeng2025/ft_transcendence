import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { EventsService } from './events.service.js';
// import { CreatMovieDto } from './dto/creat-movie.dto.js';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getEvents() {
    return this.eventsService.getEvents();
  }
}
