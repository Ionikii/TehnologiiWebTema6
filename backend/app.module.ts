import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { Person } from './person/entities/person.entity';
import { ActivityModule } from './activity/activity.module';
import { ReviewModule } from './review/review.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'dbProiectTWeb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging:true,
      synchronize: true, 
    }),
    PersonModule,
    ActivityModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
