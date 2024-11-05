import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1730834393699 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criação das tabelas principais
        await queryRunner.query(`CREATE TABLE "characters" (
            "id" SERIAL NOT NULL,
            "name" character varying NOT NULL,
            CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169e3d" PRIMARY KEY ("id")
        )`);
        await queryRunner.query(`CREATE TABLE "items" (
            "id" SERIAL NOT NULL,
            "name" character varying NOT NULL,
            CONSTRAINT "PK_8e0b6b45c699d7d3a7148b1c8a8" PRIMARY KEY ("id")
        )`);
        await queryRunner.query(`CREATE TABLE "quests" (
            "id" SERIAL NOT NULL,
            "title" character varying NOT NULL,
            CONSTRAINT "PK_3adf848239f8f839d3a7147b1c9b" PRIMARY KEY ("id")
        )`);

        // Criação das tabelas de junção
        await queryRunner.query(`CREATE TABLE "characters_items_items" (
            "characterId" integer NOT NULL,
            "itemId" integer NOT NULL,
            CONSTRAINT "PK_character_item" PRIMARY KEY ("characterId", "itemId"),
            CONSTRAINT "FK_character_item_character" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_character_item_item" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE CASCADE
        )`);

        await queryRunner.query(`CREATE TABLE "characters_quests_quests" (
            "characterId" integer NOT NULL,
            "questId" integer NOT NULL,
            CONSTRAINT "PK_character_quest" PRIMARY KEY ("characterId", "questId"),
            CONSTRAINT "FK_character_quest_character" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_character_quest_quest" FOREIGN KEY ("questId") REFERENCES "quests"("id") ON DELETE CASCADE
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remoção das tabelas de junção
        await queryRunner.query(`DROP TABLE "characters_items_items"`);
        await queryRunner.query(`DROP TABLE "characters_quests_quests"`);

        // Remoção das tabelas principais
        await queryRunner.query(`DROP TABLE "characters"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "quests"`);
    }
}
