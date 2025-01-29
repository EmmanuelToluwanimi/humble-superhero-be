import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('POST /superheroes', () => {
    const payload = {
      name: 'Orunmila',
      superPower: 'Wisdom',
      humilityScore: 10,
    };

    return request(app.getHttpServer())
      .post('/superheroes')
      .send(payload)
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          id: expect.any(Number),
          name: 'Orunmila',
          superPower: 'Wisdom',
          humilityScore: 10,
        });
      });
  });

  it('GET /superheroes', async () => {
    await request(app.getHttpServer()).post('/superheroes').send({
      name: 'Ogun',
      superPower: 'Iron',
      humilityScore: 7,
    });

    await request(app.getHttpServer()).post('/superheroes').send({
      name: 'Orunmila',
      superPower: 'Wisdom',
      humilityScore: 10,
    });

    await request(app.getHttpServer()).post('/superheroes').send({
      name: 'Sango',
      superPower: 'Thunder',
      humilityScore: 8,
    });

    return request(app.getHttpServer())
      .get('/superheroes')
      .expect(200)
      .expect((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(res.body[0].humilityScore).toBe(10);
      });
  });
});
