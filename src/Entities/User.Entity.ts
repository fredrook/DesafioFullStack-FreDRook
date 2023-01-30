import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import Contact from "./Contact.Entity"

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: "integer" })
  phoneNumber: number;

  @Column()
  registrationDate: Date;
    
  @UpdateDateColumn()
  updatedAt: Date
    
  @Column({ default: false })
  isAdmin: boolean

  @Column({ default: true })
  isActive: boolean
    
  @OneToMany(() => Contact, (contact) => contact.user)
  contact: Contact[]
}

export default Users;
