import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DIContainerConfig } from '../../../main/config/d-i-container.config';
import { AuthorService } from '../../../domain/services/author.service';
import { AuthorController } from '../../controllers/author.controller';
import { Connection } from '../../../infra/database';

export const handle = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  await Connection();

  DIContainerConfig.bindClass(AuthorService);
  DIContainerConfig.bindClass(AuthorController);

  const controller = DIContainerConfig.container.resolve(AuthorController);
  return controller.getById(event);
};
