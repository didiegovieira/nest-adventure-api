import { validate } from 'class-validator';
import { CreateCharacterDto } from './create-character.dto';
import { Item } from '../../domain/entity/item.entity';
import { Quest } from '../../domain/entity/quest.entity';

describe('CreateCharacterDto', () => {
  let dto: CreateCharacterDto;

  beforeEach(() => {
    dto = new CreateCharacterDto();
  });

  it('should be valid with correct data', async () => {
    dto.name = 'Hero';
    dto.items = [{ id: 1, name: 'Sword', characters: [] }] as Item[];
    dto.quests = [{ id: 1, title: 'Quest A', characters: [] }] as Quest[];

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be invalid if name is not a string', async () => {
    dto.name = 123 as any; 
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should allow items to be optional', async () => {
    dto.name = 'Hero';
    dto.items = undefined;

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should allow quests to be optional', async () => {
    dto.name = 'Hero';
    dto.quests = undefined;

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be invalid if items is not an array', async () => {
    dto.name = 'Hero';
    dto.items = 'not-an-array' as any;  

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isArray');
  });

  it('should be invalid if quests is not an array', async () => {
    dto.name = 'Hero';
    dto.quests = 'not-an-array' as any;  

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isArray');
  });

  it('should be invalid if name is missing', async () => {
    dto.name = undefined as any;

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });
});
