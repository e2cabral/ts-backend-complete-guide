import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id!: number;

  @Column({ type: 'varchar', name: 'name' })
    name!: string;

  @Column({ type: 'date', name: 'born_date' })
    bornDate!: Date;

  @Column({ type: 'date', name: 'death_date' })
    deathDate!: Date;
}
