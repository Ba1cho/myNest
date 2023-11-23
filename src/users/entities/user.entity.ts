import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'email', type: 'varchar' })
  email: string

  @Column({ name: 'password', type: 'varchar' })
  password: string

  @Column({ name: 'name', type: 'varchar' })
  nameFirst: string

  @Column({ name: 'birth_date', type: 'integer', nullable: true })
  birthDate: Number

  @Column({ name: 'role', type: 'varchar' })
  role: string
}
