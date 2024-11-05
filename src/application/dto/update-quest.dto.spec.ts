import { validate } from 'class-validator';
import { UpdateQuestDto } from './update-quest.dto';

describe('UpdateQuestDto', () => {
  let dto: UpdateQuestDto;

  beforeEach(() => {
    dto = new UpdateQuestDto();
  });

  it('should be valid with correct data', async () => {
    dto.title = 'Updated Quest';

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be valid with optional data', async () => {
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be invalid if title is not a string', async () => {
    dto.title = 123 as any;

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });
});