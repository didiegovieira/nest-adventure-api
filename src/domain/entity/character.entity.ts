import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Item } from './item.entity';
import { Quest } from './quest.entity';

@Entity('characters')
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Item, item => item.characters)
  @JoinTable()
  items: Item[];

  @ManyToMany(() => Quest, quest => quest.characters)
  @JoinTable()
  quests: Quest[];
}