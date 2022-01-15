import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ok } from '../../../helpers/http';
import { DIContainerConfig, Messager, HelloWorld } from '../../../main/config/d-i-container.config';
import { Connection } from '../../../infra/database';

export const helloWorld = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log(event);

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
