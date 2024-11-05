import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { CharacterModule } from './config/character.module';
import { ItemModule } from './config/item.module';
import { QuestModule } from './config/quest.module';

@Module({
  imports: [DatabaseModule, CharacterModule, ItemModule, QuestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
