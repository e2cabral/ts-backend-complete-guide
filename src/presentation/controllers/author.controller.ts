import { injectable } from 'inversify';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { AuthorService } from '../../domain/services/author.service';
import { badRequest, ok, serverError } from '../../helpers/http';

@injectable()
export class AuthorController {
  service: AuthorService;

  constructor(service: AuthorService) {
    this.service = service;
  }

  async getAll(): Promise<APIGatewayProxyResult> {
    try {
      const authors = await this.service.getAll();
      return ok(authors);
    } catch (err) {
      return serverError((err as Error));
    }
  }

  async getById(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      const { id } = (event.pathParameters as { id: string });
      const author = await this.service.getById(+id);

      return ok(author);
    } catch (err) {
      return badRequest((err as Error));
    }
  }
}
