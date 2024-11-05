import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from 'src/domain/entity/character.entity';
import { Item } from 'src/domain/entity/item.entity';
import { Quest } from 'src/domain/entity/quest.entity';
import { ItemUsecase } from 'src/application/usecase/item.controller';
import { ItemController } from 'src/infrastructure/http/controller/item.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Item, Quest])],
  providers: [ItemUsecase],
  controllers: [ItemController],
  exports: [ItemUsecase],
})
export class ItemModule {}