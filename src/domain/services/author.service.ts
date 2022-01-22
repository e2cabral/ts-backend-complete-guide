import { injectable } from 'inversify';
import { getCustomRepository } from 'typeorm';
import { Author } from '../models/author.model';
import { AuthorRepository } from '../../data/repositories/author.repository';

@injectable()
export class AuthorService {
  repository: AuthorRepository;

  constructor() {
    this.repository = getCustomRepository(AuthorRepository);
  }

  async getAll(): Promise<Array<Author>> {
    try {
      return this.repository.getAll();
    } catch (err) {
      throw new Error();
    }
  }

  async getById(id: number): Promise<Author> {
    try {
      return this.repository.getById(id);
    } catch (err) {
      throw new Error();
    }
  }
}
