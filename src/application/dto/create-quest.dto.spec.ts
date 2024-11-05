import { validate } from 'class-validator';
import { CreateQuestDto } from './create-quest.dto';

describe('CreateQuestDto', () => {
  let dto: CreateQuestDto;

  beforeEach(() => {
    dto = new CreateQuestDto();
  });

  it('should be valid with correct data', async () => {
    dto.title = 'Dragon Hunt';

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be invalid if title is not a string', async () => {
    dto.title = 123 as any;

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should be invalid if title is missing', async () => {
    dto.title = undefined as any;

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });
});