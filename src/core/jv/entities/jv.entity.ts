import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jv')
export class Jv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'integer', nullable: false })
  note: number;
}
