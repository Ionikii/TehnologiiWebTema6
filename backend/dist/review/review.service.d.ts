import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
export declare class ReviewService {
    private reviewRepository;
    activityRepository: any;
    personRepository: any;
    constructor(reviewRepository: Repository<Review>);
    create(createReviewDto: CreateReviewDto): Promise<Review>;
    getReviews(activityId: number): Promise<Review[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReviewDto: UpdateReviewDto): string;
    remove(id: number): string;
}
