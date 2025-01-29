import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { ISuperhero } from 'src/utils/types';
import { z } from 'zod';

const SuperheroSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  superPower: z.string().nonempty({ message: 'Superpower is required' }),
  humilityScore: z
    .number()
    .min(1, { message: 'Humility score must be at least 1' })
    .max(10, { message: 'Humility score must be at most 10' }),
});

function validateSuperHero(params: Omit<ISuperhero, 'id'>) {
  const result = SuperheroSchema.safeParse(params);
  if (!result.success) {
    return {
      message: result.error.errors.map((err) => err.message).join(', '),
    };
  }
}

@Injectable()
export class HeroService {
  public heroes: ISuperhero[] = [
    {
      id: 1,
      name: 'Superman',
      superPower: 'Super Strength & Flight',
      humilityScore: 8,
    },
    {
      id: 2,
      name: 'Spiderman',
      superPower: 'Wall-Crawling & Spider-Sense',
      humilityScore: 9,
    },
    {
      id: 3,
      name: 'Doctor Strange',
      superPower: 'Master of the Mystic Arts',
      humilityScore: 7,
    },
  ];
  create(payload: CreateHeroDto) {
    const validation = validateSuperHero(payload);
    if (validation?.message) {
      throw new BadRequestException(validation.message);
    }
    const newHero: ISuperhero = { id: this.heroes.length + 1, ...payload };
    this.heroes.push(newHero);
    return newHero;
  }

  findAll() {
    return this.heroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
