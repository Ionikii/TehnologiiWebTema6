import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PersonModule } from '../person/person.module';  // Importă modulul Person
import { PersonService } from '../person/person.service';

@Module({
  imports: [PersonModule],  // Importă PersonModule pentru a accesa PersonService
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}