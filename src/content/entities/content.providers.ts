import { DataSource } from "typeorm";
import { Content } from "./content.entity";

export const contentProviders = [{
    provide:"CONTENT_REPOSITORY",
    useFactory:(dataSource:DataSource) => {
        console.log(dataSource.getRepository(Content));
        return dataSource.getRepository(Content)
    },
    inject:["DATA_SOURCE"]
}]