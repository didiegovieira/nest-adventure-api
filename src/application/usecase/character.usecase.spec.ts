import { Test, TestingModule } from '@nestjs/testing';
import { CharacterUsecase } from './character.usecase';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Character } from 'src/domain/entity/character.entity';
import { Repository } from 'typeorm';
import { CrudRequest } from '@dataui/crud';
import { ParsedRequestParams } from '@dataui/crud-request';

describe('CharacterUsecase', () => {
  let service: CharacterUsecase;
  let repository: Repository<Character>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharacterUsecase,
        {
          provide: getRepositoryToken(Character),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CharacterUsecase>(CharacterUsecase);
    repository = module.get<Repository<Character>>(getRepositoryToken(Character));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a character', async () => {
    const character = { id: 1, name: 'Hero', items: [], quests: [] };
    jest.spyOn(repository, 'save').mockResolvedValue(character as any);

    const req: CrudRequest = {
      parsed: {} as ParsedRequestParams,
      options: {},
    };

    const result = await service.createOne(req, character);
    expect(result).toEqual(character);
  });

  it('should find a character by id', async () => {
    const character = { id: 1, name: 'Hero', items: [], quests: [] };
    jest.spyOn(repository, 'findOne').mockResolvedValue(character as any);

    const result = await service.findOne({ where: { id: 1 } });
    expect(result).toEqual(character);
  });

  it('should update a character', async () => {
    const character = { id: 1, name: 'Updated Hero', items: [], quests: [] };
    jest.spyOn(repository, 'save').mockResolvedValue(character as any);

    const req: CrudRequest = {
      parsed: {} as ParsedRequestParams,
      options: {},
    };

    const result = await service.updateOne(req, character);
    expect(result).toEqual(character);
  });

  it('should delete a character', async () => {
    jest.spyOn(repository, 'delete').mockResolvedValue({ affected: 1 } as any);

    const req: CrudRequest = {
      parsed: {} as ParsedRequestParams,
      options: {},
    };

    const result = await service.deleteOne(req);
    expect(result).toEqual({ affected: 1 });
  });
});