import 'reflect-metadata';
import { Container, interfaces } from 'inversify';
import ServiceIdentifier = interfaces.ServiceIdentifier;
import Newable = interfaces.Newable;

export class DIContainerConfig {
  static container: Container = new Container();

  static bindClass<T>(type: ServiceIdentifier<T>) {
    this.container.bind<T>(type).to(type as Newable<T>);
  }
}
