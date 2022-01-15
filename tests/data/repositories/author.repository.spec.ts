import { getCustomRepository } from 'typeorm';
import { AuthorRepository } from '../../../src/data/repositories/author.repository';
import { Author } from '../../../src/domain/models/author.model';
import { Connection } from '../../../src/infra/database';

let repository: AuthorRepository;

const renderConnection = async () => {
  await Connection();
  repository = getCustomRepository(AuthorRepository);
};

describe('Author Repository', () => {
  test('Should return an array of Authors on success', async () => {
    await renderConnection();

    const authors = await repository.getAll();
    const typeToCompare: Author[] = [];

    expect(typeof authors).toEqual(typeof typeToCompare);
  });
});
