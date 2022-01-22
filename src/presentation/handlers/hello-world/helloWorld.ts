import { APIGatewayProxyResult } from 'aws-lambda';
import { ok } from '../../../helpers/http';
import { DIContainerConfig } from '../../../main/config/d-i-container.config';
import { Connection } from '../../../infra/database';
import { Messager } from '../../../domain/models/messager.model';
import { HelloWorld } from '../../../domain/models/hello-world.model';

export const helloWorld = async (): Promise<APIGatewayProxyResult> => {
  DIContainerConfig.bindClass(Messager);
  DIContainerConfig.bindClass(HelloWorld);

  const message = DIContainerConfig.container.resolve(Messager);

  const connection = await Connection();

  return ok(
    JSON.stringify(
      {
        message: message.sendHelloWorldMessage(),
        connection: connection.name,
      },
    ),
  );
};
