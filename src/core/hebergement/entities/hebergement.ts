import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Adresse } from '../../adresse/adresse.entity';
import { HebergementStatut } from './hebergement-statut';

@Entity('hebergement')
export class Hebergement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', name: 'supprime' })
  deleted: boolean;

  @Column({ type: 'varchar', name: 'nom' })
  nom: string;

  @Column({ type: 'integer', name: 'adresse_id' })
  adresseId: number;

  @Column({ type: 'uuid', name: 'hebergement_id' })
  hebergementId: string;

  @ManyToOne(() => Adresse, (adresse) => adresse.hebergements)
  @JoinColumn({ referencedColumnName: 'id', name: 'adresse_id' })
  adresse: Adresse;

  @OneToOne(() => HebergementStatut, { eager: true })
  @JoinColumn({ referencedColumnName: 'id', name: 'statut_id' })
  statut: HebergementStatut;
}
