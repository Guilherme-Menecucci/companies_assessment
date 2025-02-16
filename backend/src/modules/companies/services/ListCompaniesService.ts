import { injectable, inject } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

import IPagination from '@shared/infra/database/interface/IPagination';

import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRepository';
import Company from '../infra/database/files/entities/Company';

@injectable()
class ListCompaniesService {
  constructor(
    @inject('CompaniesRepository')
    private companyRepository: ICompaniesRepository,
  ) {}

  public async execute(): Promise<IPagination<Company> | undefined> {
    let companiesList = await this.companyRepository.index();

    return instanceToInstance(companiesList);
  }
}

export default ListCompaniesService;
