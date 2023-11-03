"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentProviders = void 0;
const content_entity_1 = require("./content.entity");
exports.contentProviders = [{
        provide: "CONTENT_REPOSITORY",
        useFactory: (dataSource) => {
            console.log(dataSource.getRepository(content_entity_1.Content));
            return dataSource.getRepository(content_entity_1.Content);
        },
        inject: ["DATA_SOURCE"]
    }];
//# sourceMappingURL=content.providers.js.map