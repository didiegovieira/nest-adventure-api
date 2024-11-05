import { IsString, IsArray, IsOptional } from 'class-validator';
import { Item } from 'src/domain/entity/item.entity';
import { Quest } from 'src/domain/entity/quest.entity';

export class UpdateCharacterDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsArray()
  @IsOptional()
  items?: Item[];

  @IsArray()
  @IsOptional()
  quests?: Quest[];
}