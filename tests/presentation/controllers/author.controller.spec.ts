import { DIContainerConfig } from '../../../src/main/config/d-i-container.config';
import { AuthorService } from '../../../src/domain/services/author.service';
import { AuthorController } from '../../../src/presentation/controllers/author.controller';
import { Author } from '../../../src/domain/models/author.model';
import { Connection } from '../../../src/infra/database';

DIContainerConfig.bindClass(AuthorService);
DIContainerConfig.bindClass(AuthorController);

describe('Author Controller', () => {
  test('Should return 200 on success', async () => {
    await Connection();

    const controller = DIContainerConfig.container.resolve(AuthorController);

    const httpResponse = await controller.getAll();
    const typeToCompare: Author[] = [new Author()];

    expect(typeof JSON.parse(httpResponse.body)).toEqual(typeof typeToCompare);
    expect(httpResponse.statusCode).toEqual(200);
  });
});
