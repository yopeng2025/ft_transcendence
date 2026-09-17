import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return 'CineClub API is running';
  }
}
