import { IsString } from 'class-validator';

export class CreateQuestDto {
  @IsString()
  title: string;
}