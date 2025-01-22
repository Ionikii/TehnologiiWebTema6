import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  activityRepository: any;
  personRepository: any;
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const activity = await this.activityRepository.findOne(createReviewDto.activityId);
    const student = await this.personRepository.findOne(createReviewDto.studentId);

    if (!activity || !student) {
      throw new Error('Activity or student not found');
    }

    const review = this.reviewRepository.create({
      activity, 
      student, 
      feedback: createReviewDto.feedback, 
      timestamp: createReviewDto.timestamp, 
    });

    return this.reviewRepository.save(review); 
  }

  // Metoda corectă
  async getReviews(activityId: number): Promise<Review[]> {
    return this.reviewRepository.find({ where: { activity: { id: activityId } } });
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}