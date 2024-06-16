import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAuthorTable1718523832040 implements MigrationInterface {
    name = 'AddAuthorTable1718523832040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."account_type_enum" AS ENUM('Cash', 'Debit Card', 'Credit Card', 'Savings', 'Investment', 'Loan', 'Other')`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" "public"."account_type_enum" NOT NULL, "balance" integer NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TYPE "public"."account_type_enum"`);
    }

}
