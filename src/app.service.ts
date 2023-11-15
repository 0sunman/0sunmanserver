import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `${process.env.GITTEST}`;
  }
  getTest(): string{
    return 'Hello Test!';
  }
}
