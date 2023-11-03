import { DataSource } from "typeorm";
import { Content } from "./content.entity";
export declare const contentProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Content>;
    inject: string[];
}[];
