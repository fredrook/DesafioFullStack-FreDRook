import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Users from "./User.Entity";

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

   @Column({ length: 200 })
  fullName: string;

  @Column()
  email: string;

   @Column({ type: "integer" })
  phoneNumber: number;

  @Column()
  registrationDate: Date;

  @ManyToOne(() => Users, { eager: true, nullable: true })
  user?: Users;
}

export default Contact;
