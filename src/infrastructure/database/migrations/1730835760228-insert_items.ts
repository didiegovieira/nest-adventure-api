import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertItems1730834393701 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "items" ("name") VALUES
            ('Magic Sword'),
            ('Healing Potion'),
            ('Mystic Shield'),
            ('Ring of Power')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM "items" WHERE "name" IN (
                'Magic Sword',
                'Healing Potion',
                'Mystic Shield',
                'Ring of Power'
            )
        `);
    }
}
