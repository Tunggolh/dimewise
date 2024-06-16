import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';

export interface IBaseRepository<T> {
  create(data: DeepPartial<T>): Promise<T>;
  findOne(filterCondition: FindOneOptions<T>): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  update(filterCondition: FindOneOptions<T>, data: DeepPartial<T>): Promise<T>;
  delete(filterCondition: FindOneOptions<T>): Promise<boolean>;
  count(options?: FindManyOptions<T>): Promise<number>;
}
