import { Test, TestingModule } from '@nestjs/testing';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

describe('HeroController', () => {
  let controller: HeroController;
  let service: HeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroController],
      providers: [HeroService],
    }).compile();

    controller = module.get<HeroController>(HeroController);
    service = module.get<HeroService>(HeroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createHero', () => {
    it('create Hero', () => {
      const newHero = controller.create({
        name: 'Orunmila',
        superPower: 'Wisdom',
        humilityScore: 10,
      });
      expect(newHero).toStrictEqual({
        id: service.heroes.length,
        name: 'Orunmila',
        superPower: 'Wisdom',
        humilityScore: 10,
      });
    });
  });

  describe('Get All Heroes', () => {
    it('Hero will highest humilityScore is the firest in the returned array', () => {
      service.create({
        name: 'Ogun',
        superPower: 'Iron',
        humilityScore: 7,
      });
      service.create({
        name: 'Orunmila',
        superPower: 'Wisdom',
        humilityScore: 10,
      });
      service.create({
        name: 'Sango',
        superPower: 'Thunder',
        humilityScore: 8,
      });

      const sortedHeroes = service.findAll();
      expect(sortedHeroes[0].humilityScore).toBe(10);
    });
  });
});
