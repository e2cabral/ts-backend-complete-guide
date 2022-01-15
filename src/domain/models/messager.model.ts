import { injectable } from 'inversify';
import { HelloWorld } from './hello-world.model';

@injectable()
export class Messager {
  helloWorld: HelloWorld;

  constructor(helloWorld: HelloWorld) {
    this.helloWorld = helloWorld;
  }

  sendHelloWorldMessage() {
    return this.helloWorld.send();
  }
}
