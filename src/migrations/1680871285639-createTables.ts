import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1680871285639 implements MigrationInterface {
    name = 'CreateTables1680871285639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(200) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phoneNumber" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isAdmin" boolean NOT NULL DEFAULT true, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "fullName" character varying(200) NOT NULL, "email" character varying NOT NULL, "phoneNumber" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
