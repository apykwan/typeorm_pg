import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';

import { Profile } from './Profile.entity';
import { Todo } from './Todo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true, eager: true })
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Todo, todo => todo.user, { cascade: true })
  todos: Todo[]
}