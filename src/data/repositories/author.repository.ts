import 'reflect-metadata';
import { EntityRepository, Repository } from 'typeorm';
import { injectable } from 'inversify';
import { Author } from '../../domain/models/author.model';

@injectable()
@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
  async getAll(): Promise<Author[]> {
    return this.find();
  }
}
