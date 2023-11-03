import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    create(createContentDto: CreateContentDto): Promise<string>;
    findAll(): Promise<import("./entities/content.entity").Content[]>;
    findOne(id: string): string;
    update(id: string, updateContentDto: UpdateContentDto): string;
    remove(id: string): string;
}
