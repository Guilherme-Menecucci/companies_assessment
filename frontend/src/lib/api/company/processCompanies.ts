import { TCompany } from '../../../types/_api';
import { TIndustriesGroup } from '../../../types/logic/useHomeLogic';

const processCompanies = (companies: TCompany[]): TIndustriesGroup[] => {
  const uniqueCompanies = new Map<string, TCompany>();

  companies.forEach(company => {
    if (uniqueCompanies.has(company.uuid)) {
      uniqueCompanies.get(company.uuid)!.total_jobs_available += company.total_jobs_available;
    } else {
      uniqueCompanies.set(company.uuid, { ...company });
    }
  });

  const industryMap = new Map<number, { name: string; companies: TCompany[] }>();

  uniqueCompanies.forEach(company => {
    company.industries.forEach(industry => {
      if (!industryMap.has(industry.id)) {
        industryMap.set(industry.id, { name: industry.name, companies: [] });
      }
      industryMap.get(industry.id)!.companies.push(company);
    });
  });

  return Array.from(industryMap.values()).map(industry => ({
    ...industry,
    companies: industry.companies.sort((a, b) => a.name.localeCompare(b.name)),
  }));
};

export default processCompanies;
