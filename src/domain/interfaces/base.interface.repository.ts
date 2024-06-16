export abstract class BaseInterfaceRepository<T> {
  abstract create(data: Partial<T>): Promise<T>;
  abstract findOne(filterCondition: any): Promise<T>;
  abstract findAll(options?: any): Promise<T[]>;
  abstract findWithRelations(relations: any): Promise<T[]>;
  abstract update(filterCondition: any, data: any): Promise<T>;
  abstract remove(id: number): Promise<boolean>;
  abstract count(options?: any): Promise<number>;
}
