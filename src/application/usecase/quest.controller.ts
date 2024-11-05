import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

import { Quest } from 'src/domain/entity/quest.entity';

@Injectable()
export class QuestUsecase extends TypeOrmCrudService<Quest> {
  constructor( @InjectRepository(Quest) repo) {
    super(repo);
  }
}
