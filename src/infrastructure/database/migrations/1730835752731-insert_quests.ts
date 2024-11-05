import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertQuests1730834393700 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "quests" ("title") VALUES
            ('Retrieve the Ancient Artifact'),
            ('Defeat the Dragon'),
            ('Rescue the Village'),
            ('Explore the Mystic Cave')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM "quests" WHERE "title" IN (
                'Retrieve the Ancient Artifact',
                'Defeat the Dragon',
                'Rescue the Village',
                'Explore the Mystic Cave'
            )
        `);
    }
}
