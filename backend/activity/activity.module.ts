import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { ReviewModule } from 'review/review.module';

@Module({
  imports:[TypeOrmModule.forFeature([Activity]), ReviewModule],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
