import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

import { Course } from './Course.entity';

@Entity({ name: "Student"})
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  rollNo: string;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ nullable: false })
  age: number;

  @ManyToMany(() => Course, course => course.students, { cascade: true, eager: true })
  @JoinTable()
  courses: Course[]
}