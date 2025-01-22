import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';
import { Review } from 'review/entities/review.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async getReviews(activityId: string): Promise<Review[]> {
    return this.reviewRepository.find({ where: { activityId } });
  }
 
  create(createActivityDto: CreateActivityDto) {
    const activity = this.activityRepository.create({
      description: createActivityDto.description,
      teacherID: createActivityDto.teacherId,  // Use the teacherId from DTO
      password: createActivityDto.password,
      time: createActivityDto.time,
    });
    return this.activityRepository.save(activity);
  }

  findAll() {
    return this.activityRepository.find();
  }

  findOne(id: number) {
    return this.activityRepository.findOneBy({id});
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.activityRepository.update(id, updateActivityDto);
  }

  remove(id: number) {
    return this.activityRepository.delete(id);
  }
}
