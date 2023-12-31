"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: "DATA_SOURCE",
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: 3306,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [
                    __dirname + "/../**/entities/*.entity{.ts,.js}"
                ],
                synchronize: true
            });
            return dataSource.initialize();
        }
    }
];
//# sourceMappingURL=database.providers.js.map