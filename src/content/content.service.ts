import { Inject, Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @Inject("CONTENT_REPOSITORY")
    private contentRepository:Repository<Content>
  ){}
  async create(createContentDto: CreateContentDto) {
    this.contentRepository.save(createContentDto);
    return 'This action adds a new content';
  }

  async findAll(): Promise<Content[]> {
    return this.contentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} content`;
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return `This action updates a #${id} content`;
  }

  remove(id: number) {
    this.contentRepository.delete({"id":id});
    return `This action removes a #${id} content`;
  }
}
