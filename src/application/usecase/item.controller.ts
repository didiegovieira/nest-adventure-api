import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

import { Item } from 'src/domain/entity/item.entity';

@Injectable()
export class ItemUsecase extends TypeOrmCrudService<Item> {
  constructor( @InjectRepository(Item) repo) {
    super(repo);
  }
}
