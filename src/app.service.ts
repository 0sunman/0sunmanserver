import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '나는 서버다!!!! 2';
  }
  getTest(): string{
    return 'Hello Test!';
  }
}
