import { validate } from 'class-validator';
import { CreateItemDto } from './create-item.dto';

describe('CreateItemDto', () => {
  let dto: CreateItemDto;

  beforeEach(() => {
    dto = new CreateItemDto();
  });

  it('should be valid with correct data', async () => {
    dto.name = 'Sword';

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should be invalid if name is not a string', async () => {
    dto.name = 123 as any;

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should be invalid if name is missing', async () => {
    dto.name = undefined as any;

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toHaveProperty('isString');
  });
});