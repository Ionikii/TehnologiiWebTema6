import { Injectable } from '@nestjs/common';
import { PersonService } from '../person/person.service';  
import { LoginDto } from './dto/login.dto';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';  
@Injectable()
export class AuthService {
  constructor(private readonly personService: PersonService) {}

  async login(loginDto: LoginDto) {
    const user = await this.personService.findByEmail(loginDto.email); 
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.password !== loginDto.password) {
     
      throw new UnauthorizedException('Invalid password');
    }
    return { message: 'Login successful' }; 
  }
}