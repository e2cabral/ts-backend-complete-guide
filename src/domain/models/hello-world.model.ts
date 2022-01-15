import { injectable } from 'inversify';

@injectable()
export class HelloWorld {
  send() {
    return 'Hello World!';
  }
}
