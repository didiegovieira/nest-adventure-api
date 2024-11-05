import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCharacters1730834393702 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "characters" ("name") VALUES
            ('Aragon the Brave'),
            ('Luna the Enchantress'),
            ('Thorin the Shield Bearer'),
            ('Eldrin the Archer')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM "characters" WHERE "name" IN (
                'Aragon the Brave',
                'Luna the Enchantress',
                'Thorin the Shield Bearer',
                'Eldrin the Archer'
            )
        `);
    }
}
