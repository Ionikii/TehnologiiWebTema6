import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('activity/:activityId')
  async getReviews(@Param('activityId') activityId: string) {
    const activityIdNumber = parseInt(activityId, 10);  // Convertește `activityId` în `number`
    if (isNaN(activityIdNumber)) {
      throw new Error('Invalid activity ID');
    }
    return this.reviewService.getReviews(activityIdNumber);  // Apelează metoda corectă cu un `number`
  }

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reviewService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reviewService.remove(id);
  }
}
