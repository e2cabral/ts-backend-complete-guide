import 'reflect-metadata';
import { EntityRepository, Repository } from 'typeorm';
import { injectable } from 'inversify';
import { Author } from '../../domain/models/author.model';
import { IsNullOrUndefined } from '../../helpers/error/error.helper';

@injectable()
@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
  async getAll(): Promise<Author[]> {
    return this.find();
  }

  async getById(id: number): Promise<Author | undefined> {
    try {
      const author = await this.findOne(id);

      IsNullOrUndefined(() => author === undefined, 'An invalid ID was provided.');

      return author;
    } catch (err) {
      throw Error((err as Error).message);
    }
  }
}
