import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { Profile } from './Profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  isActive: boolean;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true, eager: true })
  @JoinColumn()
  profile: Profile;
}