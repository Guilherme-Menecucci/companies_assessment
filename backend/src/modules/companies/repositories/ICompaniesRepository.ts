import IPagination from '@shared/infra/database/interface/IPagination';

import Company from '../infra/database/files/entities/Company';

interface ICompaniesRepository {
  /**
   * Return all available companies
   */
  index(): Promise<IPagination<Company>>;
}

export default ICompaniesRepository;
