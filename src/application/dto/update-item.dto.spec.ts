import { validate } from 'class-validator';
import { UpdateItemDto } from './update-item.dto';

describe('UpdateItemDto', () => {
  let dto: UpdateItemDto;

  beforeEach(() => {
    dto = new UpdateItemDto();
  });

  it('should be valid with correct data', async () => {
    dto.name = 'Shield';

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