export interface IBaseRepository<T> {
  create(data: T): Promise<T>;
  findOne(filterCondition: any): Promise<T>;
  findAll(options?: any): Promise<T[]>;
  findWithRelations(relations: any): Promise<T[]>;
  update(filterCondition: any, data: any): Promise<T>;
  remove(id: number): Promise<boolean>;
  count(options?: any): Promise<number>;
}
