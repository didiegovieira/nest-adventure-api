import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from 'src/domain/entity/character.entity';
import { Item } from 'src/domain/entity/item.entity';
import { Quest } from 'src/domain/entity/quest.entity';
import { CharacterUsecase } from 'src/application/usecase/character.usecase';
import { CharacterController } from 'src/infrastructure/http/controller/character.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Item, Quest])],
  providers: [CharacterUsecase],
  controllers: [CharacterController],
  exports: [CharacterUsecase],
})
export class CharacterModule {}