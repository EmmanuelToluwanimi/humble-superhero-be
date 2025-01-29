import { Controller, Get, Post, Body } from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  create(@Body() payload: CreateHeroDto) {
    return this.heroService.create(payload);
  }

  @Get()
  findAll() {
    return this.heroService.findAll();
  }
}
