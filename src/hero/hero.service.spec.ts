import { Test, TestingModule } from '@nestjs/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroService],
    }).compile();

    service = module.get<HeroService>(HeroService);
  });

  it('create Hero', () => {
    const newHero = service.create({
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
