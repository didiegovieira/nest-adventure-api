import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

import { Character } from 'src/domain/entity/character.entity';

@Injectable()
export class CharacterUsecase extends TypeOrmCrudService<Character> {
  constructor( @InjectRepository(Character) repo) {
    super(repo);
  }
}
