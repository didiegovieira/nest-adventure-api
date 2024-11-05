import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Character } from './character.entity';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Character, character => character.items)
  characters: Character[];
}