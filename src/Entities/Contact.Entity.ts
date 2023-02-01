import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from "typeorm";
import Users from "./User.Entity";

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 200 })
  fullName: string;

  @Column()
  email: string;

  @Column({ type: "integer" })
  phoneNumber: number;

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => Users, { nullable: true })
  user?: Users;
}

export default Contact;
