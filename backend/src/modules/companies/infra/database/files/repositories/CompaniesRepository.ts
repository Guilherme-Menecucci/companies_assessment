import IPagination from '@shared/infra/database/interface/IPagination';

import dbData from '@database/data.json';

import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRepository';

import Company from '../entities/Company';

class CompaniesRepository implements ICompaniesRepository {
  private data = dbData;

  constructor() {
    this.data = dbData;
  }

  public async index() {
    return new Promise<IPagination<Company>>(resolve => {
      return resolve(this.data);
    });
  }
}

export default CompaniesRepository;
