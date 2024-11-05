import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Character } from './character.entity';

@Entity('quests')
export class Quest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Character, character => character.quests)
  characters: Character[];
}