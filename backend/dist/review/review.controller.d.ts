import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(createReviewDto: CreateReviewDto): Promise<import("./entities/review.entity").Review>;
    getReviews(activityId: string): Promise<import("./entities/review.entity").Review[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReviewDto: UpdateReviewDto): string;
    remove(id: string): string;
}
