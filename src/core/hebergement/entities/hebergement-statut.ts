import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hebergement_statut')
export class HebergementStatut {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'value' })
  value: string;
}
