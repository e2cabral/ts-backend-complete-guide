import 'reflect-metadata';
import { Container, injectable, interfaces } from 'inversify';
import ServiceIdentifier = interfaces.ServiceIdentifier;
import Newable = interfaces.Newable;

@injectable()
export class HelloWorld {
  send() {
    return 'Hello World!';
  }
}

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

export class DIContainerConfig {
  static container: Container = new Container();

  static bindClass<T>(type: ServiceIdentifier<T>) {
    this.container.bind<T>(type).to(type as Newable<T>);
  }
}
