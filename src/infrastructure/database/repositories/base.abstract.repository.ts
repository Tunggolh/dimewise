import { IBaseRepository } from 'src/domain/interfaces/base.interface.repository';
import { Repository } from 'typeorm';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected constructor(protected readonly repository: Repository<T>) {}

  async create(data: T): Promise<T> {
    return await this.repository.save(data);
  }

  async findOne(filterCondition: any): Promise<T> {
    return await this.repository.findOne(filterCondition);
  }

  async findAll(options?: any): Promise<T[]> {
    return await this.repository.find(options);
  }

  async findWithRelations(relations: any): Promise<T[]> {
    return await this.repository.find({ relations });
  }

  async update(filterCondition: any, data: any): Promise<T> {
    await this.repository.update(filterCondition, data);
    return this.repository.findOne(filterCondition);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected === 1;
  }

  async count(options?: any): Promise<number> {
    return this.repository.count(options);
  }
}
