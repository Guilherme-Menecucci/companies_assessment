import { container } from 'tsyringe';

import ICompaniesRepository from '@modules/companies/repositories/ICompaniesRepository';
import CompaniesRepository from '@modules/companies/infra/database/files/repositories/CompaniesRepository';

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);
