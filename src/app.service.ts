import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloPlusName(): string {
    return 'Hello Baruch';
  }
  getTime(): Date {
    return new Date();
  }
}
