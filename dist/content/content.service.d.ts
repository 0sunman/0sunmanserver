import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';
export declare class ContentService {
    private contentRepository;
    constructor(contentRepository: Repository<Content>);
    create(createContentDto: CreateContentDto): Promise<string>;
    findAll(): Promise<Content[]>;
    findOne(id: number): string;
    update(id: number, updateContentDto: UpdateContentDto): string;
    remove(id: number): string;
}
