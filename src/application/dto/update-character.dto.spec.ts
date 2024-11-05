import { validate } from 'class-validator';
import { UpdateCharacterDto } from './update-character.dto';

describe('UpdateCharacterDto', () => {
  let dto: UpdateCharacterDto;

  beforeEach(() => {
    dto = new UpdateCharacterDto();
  });

  it('should be valid with correct data', async () => {
    dto.name = 'Updated Hero';

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be valid with optional data', async () => {
    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be invalid if name is not a string', async () => {
    dto.name = 123 as any;

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });
});