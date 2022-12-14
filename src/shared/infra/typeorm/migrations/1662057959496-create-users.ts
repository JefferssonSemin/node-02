import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUsers1662057959496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                "name": "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                    },
                    {
                        name: "name", 
                        type: "varchar",
                        isUnique:true,
                    }, 
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "driver_license",
                        type: "varchar",
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default:false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp with time zone",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }
}
