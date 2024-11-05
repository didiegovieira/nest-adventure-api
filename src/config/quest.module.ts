import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from 'src/domain/entity/character.entity';
import { Item } from 'src/domain/entity/item.entity';
import { Quest } from 'src/domain/entity/quest.entity';
import { QuestUsecase } from 'src/application/usecase/quest.controller';
import { QuestController } from 'src/infrastructure/http/controller/quest.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Item, Quest])],
  providers: [QuestUsecase],
  controllers: [QuestController],
  exports: [QuestUsecase],
})
export class QuestModule {}