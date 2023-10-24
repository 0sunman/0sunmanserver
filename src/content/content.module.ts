import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { DatabaseModule } from 'src/database/database.modules';
import { contentProviders } from './entities/content.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [ContentController],
  providers: [...contentProviders, 
    ContentService],
})
export class ContentModule {}
