import { IsString, IsOptional } from 'class-validator';

export class UpdateQuestDto {
  @IsString()
  @IsOptional()
  title?: string;
}