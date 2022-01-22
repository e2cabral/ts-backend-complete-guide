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

  test('Should return an author on success.', async () => {
    const id = 1;
    const typeToCompare: Author = {
      id: 1,
      bornDate: new Date('2000-12-12'),
      deathDate: undefined,
      name: 'Me',
    };

    const author = await repository.getById(id);
    expect(typeof author).toEqual(typeof typeToCompare);
  });
});
