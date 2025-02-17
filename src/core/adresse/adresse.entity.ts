import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hebergement } from '../hebergement/entities/hebergement';

@Entity('adresse')
export class Adresse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'cle_insee', nullable: true })
  cleInsee: string;

  @Column({ type: 'varchar', name: 'code_insee', nullable: true })
  codeInsee: string;

  @Column({ type: 'varchar', name: 'code_postal', nullable: true })
  codePostal: string;

  @Column({ type: 'varchar', name: 'label' })
  label: string;

  @Column({ type: 'double precision', name: 'long' })
  long: number;

  @Column({ type: 'double precision', name: 'lat' })
  lat: number;

  @OneToMany(() => Hebergement, (hebergement) => hebergement.adresse)
  hebergements: Hebergement[];
}
